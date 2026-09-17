// Verifica i permessi del file delle chiavi senza leggerne il contenuto.
import fs from 'node:fs';
import { esegui } from './comune.mjs';

export function valutaAclWindows(acl) {
  const regole = Array.isArray(acl.regole) ? acl.regole : acl.regole ? [acl.regole] : [];
  const permessi = regole.filter((r) => r.tipo === 'Allow');
  return acl.protetta === true && Boolean(acl.utente) && permessi.length > 0 && permessi.every((r) => r.sid === acl.utente) && !regole.some((r) => r.tipo === 'Deny' && r.sid === acl.utente);
}

export async function verificaPermessi(file) {
  if (!fs.existsSync(file)) return { ok: false, dettaglio: 'il file non esiste' };
  if (fs.lstatSync(file).isSymbolicLink() || !fs.statSync(file).isFile()) return { ok: false, dettaglio: 'serve un file regolare, non un collegamento simbolico' };
  if (process.platform !== 'win32') {
    const modo = fs.statSync(file).mode & 0o777;
    const ok = !(modo & 0o077) && Boolean(modo & 0o400);
    return { ok, dettaglio: `permessi ${modo.toString(8)}${ok ? ', riservati al tuo utente' : ': serve lettura per il proprietario e nessun permesso per altri utenti'}` };
  }
  const script = `$ErrorActionPreference = 'Stop'; $a = Get-Acl -LiteralPath $env:CREA_FUNNEL_FILE_SEGRETI; $u = [System.Security.Principal.WindowsIdentity]::GetCurrent().User.Value; $r = @($a.Access | ForEach-Object { @{sid=$_.IdentityReference.Translate([System.Security.Principal.SecurityIdentifier]).Value; tipo=$_.AccessControlType.ToString()} }); @{utente=$u; protetta=$a.AreAccessRulesProtected; regole=$r} | ConvertTo-Json -Depth 4 -Compress`;
  const r = await esegui('powershell.exe', ['-NoProfile', '-NonInteractive', '-Command', script], { env: { CREA_FUNNEL_FILE_SEGRETI: file }, timeout: 30000 });
  try {
    const ok = r.codice === 0 && valutaAclWindows(JSON.parse(r.uscita.trim()));
    return { ok, dettaglio: ok ? 'ACL verificata, accesso riservato al tuo utente' : 'ACL non riservata al tuo utente: esegui prepara-ambiente.mjs' };
  } catch { return { ok: false, dettaglio: 'non riesco a verificare i permessi Windows; il controllo resta non superato' }; }
}

export async function restringiPermessiWindows(file) {
  const script = `$ErrorActionPreference = 'Stop'; $a = Get-Acl -LiteralPath $env:CREA_FUNNEL_FILE_SEGRETI; $u = [System.Security.Principal.WindowsIdentity]::GetCurrent().User; $a.SetAccessRuleProtection($true, $false); @($a.Access) | ForEach-Object { $a.PurgeAccessRules($_.IdentityReference) }; $r = [System.Security.AccessControl.FileSystemAccessRule]::new($u, 'FullControl', 'Allow'); $a.AddAccessRule($r); Set-Acl -LiteralPath $env:CREA_FUNNEL_FILE_SEGRETI -AclObject $a`;
  const r = await esegui('powershell.exe', ['-NoProfile', '-NonInteractive', '-Command', script], { env: { CREA_FUNNEL_FILE_SEGRETI: file }, timeout: 30000 });
  if (r.codice !== 0) throw new Error('impossibile restringere i permessi Windows di segreti.env; ambiente non pronto');
}
