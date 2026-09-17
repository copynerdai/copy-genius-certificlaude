// Solo filesystem temporanei e download simulati. Nessun account o modello AI.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync, spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { installa, preparaPacchetto, selezionaFile, prefix } from '../installa.mjs';

const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'crea-funnel-install-test-')));
const commit = 'a'.repeat(40);
const skill = fileURLToPath(new URL('../skills/crea-funnel/', import.meta.url));
const script = fileURLToPath(new URL('../installa.mjs', import.meta.url));
const scrivi = (p, s) => { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s); };
const config = (nome) => path.join(root, nome, '.claude');
function leggi(dir, rel = '', files = {}) {
  for (const e of fs.readdirSync(path.join(dir, rel), { withFileTypes: true })) {
    const p = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) leggi(dir, p, files);
    else files[p] = fs.readFileSync(path.join(dir, p));
  }
  return files;
}
const files = leggi(skill);
const pacchetto = { commit, files };
const nuovaVersione = { commit: 'b'.repeat(40), files: { ...files, 'LEGGIMI.md': Buffer.from('Guida aggiornata per il test.\n') } };
const tree = { tree: Object.entries(files).map(([p, d]) => ({ path: prefix + p, type: 'blob', mode: '100644', size: d.length, sha: createHash('sha1').update(`blob ${d.length}\0`).update(d).digest('hex') })) };

test('--help e opzioni non valide non installano nulla', () => {
  const configDir = config('help');
  const env = { ...process.env, CLAUDE_CONFIG_DIR: configDir };
  const aiuto = execFileSync(process.execPath, [script, '--help'], { env, encoding: 'utf8' });
  for (const opzione of ['--help', '--sostituisci', '--ref']) assert.ok(aiuto.includes(opzione));
  const alias = path.join(root, 'installer-alias.mjs');
  fs.symlinkSync(script, alias);
  assert.equal(execFileSync(process.execPath, [alias, '--help'], { env, encoding: 'utf8' }), aiuto);
  assert.throws(() => execFileSync(process.execPath, [script, '--non-esiste'], { env, stdio: 'pipe' }));
  assert.throws(() => execFileSync(process.execPath, [script, '--ref', '../main'], { env, stdio: 'pipe' }));
  assert.equal(fs.existsSync(configDir), false);
});

test('prima installazione integrale, comando personale e nessuna modifica ai dati', () => {
  const configDir = config('prima installazione con spazi');
  const cartellaUtente = path.dirname(configDir);
  const protetti = ['Desktop/copy-genius/brands/prova/copy.md', '.crea-funnel/segreti.env', '.claude/settings.json', '.claude/skills/altra/SKILL.md'];
  for (const p of protetti) scrivi(path.join(cartellaUtente, p), `Dato da conservare: ${p}`);
  const r = installa(pacchetto, { configDir });
  assert.equal(r.stato, 'installata');
  assert.equal(r.backup, null);
  assert.equal(r.target, path.join(configDir, 'skills/crea-funnel'));
  assert.equal(fs.existsSync(path.join(r.target, '.claude-plugin')), false);
  for (const [p, d] of Object.entries(files)) assert.deepEqual(fs.readFileSync(path.join(r.target, p)), d, p);
  for (const p of protetti) assert.equal(fs.readFileSync(path.join(cartellaUtente, p), 'utf8'), `Dato da conservare: ${p}`);
  assert.match(fs.readFileSync(path.join(r.target, 'SKILL.md'), 'utf8'), /^name: crea-funnel$/m);
  const ricevuta = JSON.parse(fs.readFileSync(path.join(r.target, '.installazione-copynerd.json'), 'utf8'));
  assert.equal(ricevuta.commit, commit);
  assert.equal(Object.keys(ricevuta.files).length, Object.keys(files).length);
});

test('ripetizione senza modifiche: nessuna sostituzione né backup aggiuntivo', () => {
  const configDir = config('ripetizione');
  const r = installa(pacchetto, { configDir });
  const prima = fs.statSync(path.join(r.target, 'SKILL.md')).mtimeMs;
  const backups = fs.readdirSync(path.join(configDir, 'backups/crea-funnel'));
  assert.equal(installa(pacchetto, { configDir }).stato, 'gia-aggiornata');
  assert.equal(fs.statSync(path.join(r.target, 'SKILL.md')).mtimeMs, prima);
  assert.deepEqual(fs.readdirSync(path.join(configDir, 'backups/crea-funnel')), backups);
});

test('aggiornamento gestito conserva integralmente la copia precedente fuori dalle skill attive', () => {
  const configDir = config('aggiorna');
  installa(pacchetto, { configDir });
  const r = installa(nuovaVersione, { configDir });
  assert.equal(r.stato, 'aggiornata');
  assert.ok(r.backup.startsWith(path.join(configDir, 'backups')));
  for (const [p, d] of Object.entries(files)) assert.deepEqual(fs.readFileSync(path.join(r.backup, p)), d);
  assert.deepEqual(fs.readFileSync(path.join(r.target, 'LEGGIMI.md')), nuovaVersione.files['LEGGIMI.md']);
  assert.deepEqual(fs.readdirSync(path.join(configDir, 'skills')), ['crea-funnel']);
});

test('copia manuale e file extra richiedono conferma; --sostituisci conserva tutto', () => {
  const configDir = config('manuale');
  const target = path.join(configDir, 'skills/crea-funnel');
  scrivi(path.join(target, 'SKILL.md'), 'La mia skill personale');
  scrivi(path.join(target, 'note.txt'), 'Note personali');
  assert.throws(() => installa(pacchetto, { configDir }), /--sostituisci/);
  assert.equal(fs.readFileSync(path.join(target, 'SKILL.md'), 'utf8'), 'La mia skill personale');
  const r = installa(pacchetto, { configDir, sostituisci: true });
  assert.equal(fs.readFileSync(path.join(r.backup, 'note.txt'), 'utf8'), 'Note personali');
  assert.equal(fs.existsSync(path.join(r.target, 'note.txt')), false);
});

test('personalizzazioni successive e ricevuta danneggiata non vengono ignorate', () => {
  const configDir = config('modificata');
  const r = installa(pacchetto, { configDir });
  scrivi(path.join(r.target, 'LEGGIMI.md'), 'Modifica locale');
  assert.throws(() => installa(nuovaVersione, { configDir }), /--sostituisci/);
  scrivi(path.join(r.target, 'LEGGIMI.md'), files['LEGGIMI.md']);
  scrivi(path.join(r.target, '.installazione-copynerd.json'), '{rotto');
  assert.throws(() => installa(nuovaVersione, { configDir }), /--sostituisci/);
});

test('file rimossi dalla nuova versione restano nel backup ma non nella skill attiva', () => {
  const configDir = config('file-rimosso');
  const prima = { ...pacchetto, files: { ...files, 'riferimenti/vecchio.md': Buffer.from('Vecchia guida') } };
  installa(prima, { configDir });
  const r = installa(pacchetto, { configDir });
  assert.equal(fs.existsSync(path.join(r.target, 'riferimenti/vecchio.md')), false);
  assert.equal(fs.readFileSync(path.join(r.backup, 'riferimenti/vecchio.md'), 'utf8'), 'Vecchia guida');
});

test('collegamenti simbolici in destinazione, genitori e backup sono rifiutati', () => {
  for (const punto of ['config', 'skills', 'target', 'backups', 'interno']) {
    const configDir = config(`symlink-${punto}`);
    const esterna = path.join(root, `originali-${punto}`);
    scrivi(path.join(esterna, 'originale.txt'), 'Intatto');
    fs.mkdirSync(configDir, { recursive: true });
    if (punto === 'config') {
      const link = path.join(path.dirname(configDir), 'alias');
      fs.symlinkSync(configDir, link, 'dir');
      assert.throws(() => installa(pacchetto, { configDir: link }), /simbolico/);
    } else {
      const rel = { skills: 'skills', target: 'skills/crea-funnel', backups: 'backups', interno: 'skills/crea-funnel/link' }[punto];
      fs.mkdirSync(path.dirname(path.join(configDir, rel)), { recursive: true });
      fs.symlinkSync(esterna, path.join(configDir, rel), 'dir');
      assert.throws(() => installa(pacchetto, { configDir, sostituisci: true }), /simbolico|cartella normale/);
    }
    assert.deepEqual(fs.readdirSync(esterna), ['originale.txt']);
  }
});

test('blocco concorrente rispettato e mai cancellato da una seconda installazione', () => {
  const configDir = config('lock');
  const lock = path.join(configDir, '.crea-funnel-install.lock');
  scrivi(lock, 'Processo esistente');
  assert.throws(() => installa(pacchetto, { configDir }), /già in corso/);
  assert.equal(fs.readFileSync(lock, 'utf8'), 'Processo esistente');
});

test('errore nella sostituzione: la vecchia skill torna attiva', (t) => {
  const configDir = config('rollback');
  const r = installa(pacchetto, { configDir });
  const rename = fs.renameSync;
  t.mock.method(fs, 'renameSync', (a, b) => {
    if (path.basename(a) === 'nuova') throw new Error('Errore di rinomina simulato');
    return rename(a, b);
  });
  assert.throws(() => installa(nuovaVersione, { configDir }), /Errore di rinomina simulato/);
  for (const [p, d] of Object.entries(files)) assert.deepEqual(fs.readFileSync(path.join(r.target, p)), d);
  assert.equal(fs.existsSync(path.join(configDir, '.crea-funnel-install.lock')), false);
});

test('elenco remoto: rifiuta traversal, symlink, manifest plugin, duplicati e liste incomplete', () => {
  assert.equal(selezionaFile(tree).length, Object.keys(files).length);
  for (const p of ['../fuori.md', 'strumenti/../../fuori.mjs', '.claude-plugin/plugin.json', 'segreti.env', 'strumenti/CON.mjs']) {
    assert.throws(() => selezionaFile({ tree: [...tree.tree, { ...tree.tree[0], path: prefix + p }] }));
  }
  assert.throws(() => selezionaFile({ truncated: true, tree: tree.tree }));
  assert.throws(() => selezionaFile({ tree: [tree.tree[0]] }));
  assert.throws(() => selezionaFile({ tree: [...tree.tree, tree.tree[0]] }));
  assert.throws(() => selezionaFile({ tree: tree.tree.map((e, i) => i ? e : { ...e, mode: '120000' }) }));
});

function githubFittizio({ corrotto = false, http = 200, troncato = false } = {}) {
  const richieste = [];
  const fetcher = async (url, opts) => {
    richieste.push(url);
    assert.equal(opts.redirect, 'error');
    assert.equal(Object.keys(opts.headers).some((k) => /authorization/i.test(k)), false);
    if (http !== 200) return new Response('Errore', { status: http });
    if (url.endsWith('/commits/main')) return Response.json({ sha: commit });
    if (url.includes('/git/trees/')) { assert.ok(url.includes(commit)); return Response.json({ ...tree, truncated: troncato }); }
    assert.ok(url.startsWith(`https://raw.githubusercontent.com/copynerdai/copy-genius-certificlaude/${commit}/${prefix}`));
    const p = url.split(prefix)[1];
    return new Response(corrotto ? Buffer.from('File corrotto') : files[p]);
  };
  return { fetcher, richieste };
}

test('download: un solo commit, tutti i file integri, nessuna credenziale', async () => {
  const mock = githubFittizio();
  const p = await preparaPacchetto(mock);
  assert.equal(p.commit, commit);
  for (const [nome, data] of Object.entries(files)) assert.deepEqual(p.files[nome], data);
  assert.equal(mock.richieste.length, Object.keys(files).length + 2);
});

test('download: hash errato, errore HTTP e albero troncato falliscono prima di installare', async () => {
  await assert.rejects(preparaPacchetto(githubFittizio({ corrotto: true })), /non integro/);
  await assert.rejects(preparaPacchetto(githubFittizio({ http: 403 })), /HTTP 403/);
  await assert.rejects(preparaPacchetto(githubFittizio({ troncato: true })), /incompleto/);
});

test('commit esplicito e ref non valide', async () => {
  const mock = githubFittizio();
  await preparaPacchetto({ ...mock, ref: commit });
  assert.equal(mock.richieste.some((u) => u.includes('/commits/main')), false);
  await assert.rejects(preparaPacchetto({ ...mock, ref: 'main' }), /40 caratteri/);
});

test('Claude Code registra davvero /crea-funnel senza prefisso, senza invocare un modello', async (t) => {
  try { execFileSync('claude', ['--version'], { stdio: 'pipe' }); }
  catch { t.skip('Claude Code non presente: rilevamento del comando non verificato.'); return; }
  const configDir = config('rilevamento-claude');
  installa(pacchetto, { configDir });
  const commands = await new Promise((resolve, reject) => {
    const p = spawn('claude', [
      '--print', '--setting-sources', 'user', '--settings', '{"disableAllHooks":true}',
      '--input-format', 'stream-json', '--output-format', 'stream-json', '--verbose',
      '--no-session-persistence', '--strict-mcp-config', '--mcp-config', '{"mcpServers":{}}', '--tools', '',
    ], { cwd: root, env: {
      PATH: process.env.PATH, SystemRoot: process.env.SystemRoot,
      CLAUDE_CONFIG_DIR: configDir, ANTHROPIC_API_KEY: 'crea-funnel-test-no-api',
      ANTHROPIC_BASE_URL: 'http://127.0.0.1:9', CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: '1',
    } });
    let pending = ''; let received = false;
    const timer = setTimeout(() => { p.kill(); reject(new Error('Timeout del rilevamento Claude Code.')); }, 15_000);
    p.on('error', (e) => { clearTimeout(timer); reject(e); });
    p.stdout.on('data', (data) => {
      pending += data;
      const lines = pending.split('\n'); pending = lines.pop();
      for (const line of lines) {
        let msg; try { msg = JSON.parse(line); } catch { continue; }
        if (msg.type !== 'control_response') continue;
        received = true;
        clearTimeout(timer);
        p.stdin.end(); p.kill();
        if (msg.response?.subtype !== 'success') reject(new Error('Inizializzazione Claude Code fallita.'));
        else resolve(msg.response.response.commands);
      }
    });
    p.stderr.resume();
    p.on('close', () => { clearTimeout(timer); if (!received) reject(new Error('Claude Code terminato senza elenco comandi.')); });
    // Solo protocollo di inizializzazione: nessun messaggio utente e nessuna richiesta AI.
    p.stdin.write(JSON.stringify({ type: 'control_request', request_id: 'test-init', request: { subtype: 'initialize' } }) + '\n');
  });
  assert.ok(commands.some((c) => c.name === 'crea-funnel'));
  assert.equal(commands.some((c) => c.name === 'crea-funnel:crea-funnel'), false);
});

test.after(() => console.log(`Materiali di collaudo conservati in: ${root}`));
