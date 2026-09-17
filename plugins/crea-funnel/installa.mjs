#!/usr/bin/env node
// Installa o aggiorna la skill personale /crea-funnel. Node >=22, nessuna dipendenza.
// Scarica soltanto la skill da un commit GitHub fissato; non esegue i file scaricati.
// Le copie precedenti restano in .claude/backups/crea-funnel, fuori dalle skill attive.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

export const repository = 'copynerdai/copy-genius-certificlaude';
export const prefix = 'plugins/crea-funnel/skills/crea-funnel/';
const ricevuta = '.installazione-copynerd.json';
const sha256 = (data) => createHash('sha256').update(data).digest('hex');
const gitHash = (data) => createHash('sha1').update(`blob ${data.length}\0`).update(data).digest('hex');
const stat = (p) => { try { return fs.lstatSync(p); } catch (e) { if (e.code === 'ENOENT') return null; throw e; } };

function nomeSicuro(p) {
  return /^(SKILL\.md|LEGGIMI\.md|LICENZE\.md|(?:riferimenti|strumenti|test)\/(?:LEGGIMI\.md|[a-z][a-z0-9.-]*\.(?:md|mjs|jsonc)))$/.test(p)
    && !p.includes('..') && !/^(con|prn|aux|nul|com[0-9]|lpt[0-9])\./i.test(path.posix.basename(p));
}

export function selezionaFile(tree) {
  if (tree.truncated || !Array.isArray(tree.tree)) throw new Error('Elenco GitHub incompleto: installazione annullata.');
  const files = tree.tree.filter((e) => e.path.startsWith(prefix) && e.type !== 'tree');
  const nomi = new Set();
  for (const e of files) {
    const p = e.path.slice(prefix.length);
    if (!nomeSicuro(p) || nomi.has(p.toLowerCase()) || e.type !== 'blob' || !['100644', '100755'].includes(e.mode)
      || !/^[a-f0-9]{40}$/.test(e.sha) || !Number.isInteger(e.size) || e.size < 0 || e.size > 2_000_000) {
      throw new Error(`File inatteso o collegamento simbolico nel pacchetto: ${p}`);
    }
    nomi.add(p.toLowerCase());
  }
  if (!nomi.has('skill.md') || !files.some((e) => e.path.startsWith(`${prefix}strumenti/`))
    || !files.some((e) => e.path.startsWith(`${prefix}riferimenti/`)) || files.length > 200) {
    throw new Error('Pacchetto Crea funnel incompleto o inatteso.');
  }
  return files;
}

async function scarica(url, fetcher, limite) {
  const r = await fetcher(url, {
    redirect: 'error', signal: AbortSignal.timeout(30_000),
    headers: { 'User-Agent': 'copynerd-crea-funnel-installer', Accept: 'application/vnd.github+json' },
  });
  if (!r.ok) throw new Error(`Download GitHub fallito (HTTP ${r.status}). Riprova più tardi; non serve incollare chiavi o token.`);
  const parti = []; let totale = 0;
  for await (const parte of r.body) {
    totale += parte.length;
    if (totale > limite) throw new Error('Download troppo grande: installazione annullata.');
    parti.push(Buffer.from(parte));
  }
  return Buffer.concat(parti);
}

export async function preparaPacchetto({ ref, fetcher = fetch } = {}) {
  if (ref !== undefined && !/^[a-f0-9]{40}$/.test(ref)) throw new Error('--ref richiede un commit completo di 40 caratteri esadecimali.');
  const api = `https://api.github.com/repos/${repository}`;
  const commit = ref ?? JSON.parse((await scarica(`${api}/commits/main`, fetcher, 2_000_000)).toString()).sha;
  if (!/^[a-f0-9]{40}$/.test(commit)) throw new Error('Commit GitHub non valido.');
  const tree = JSON.parse((await scarica(`${api}/git/trees/${commit}?recursive=1`, fetcher, 7_000_000)).toString());
  const elenco = selezionaFile(tree);
  const files = {};
  // Quattro download alla volta; tutte le richieste usano lo stesso commit.
  for (let i = 0; i < elenco.length; i += 4) {
    await Promise.all(elenco.slice(i, i + 4).map(async (e) => {
      const data = await scarica(`https://raw.githubusercontent.com/${repository}/${commit}/${e.path}`, fetcher, 2_000_000);
      if (data.length !== e.size || gitHash(data) !== e.sha) throw new Error(`File scaricato non integro: ${e.path}`);
      files[e.path.slice(prefix.length)] = data;
    }));
  }
  return { commit, files };
}

function cartellaSicura(p) {
  const parent = path.dirname(p);
  if (parent !== p) cartellaSicura(parent);
  const s = stat(p);
  if (s && (!s.isDirectory() || s.isSymbolicLink())) throw new Error(`Cartella non sicura o collegamento simbolico: ${p}`);
  if (!s) fs.mkdirSync(p, { mode: 0o700 });
}

function impronta(dir, rel = '', result = {}) {
  for (const e of fs.readdirSync(path.join(dir, rel), { withFileTypes: true })) {
    const p = rel ? `${rel}/${e.name}` : e.name;
    if (e.isSymbolicLink()) throw new Error(`Collegamento simbolico nella copia esistente: ${p}`);
    if (e.isDirectory()) impronta(dir, p, result);
    else if (e.isFile()) { if (p !== ricevuta) result[p] = sha256(fs.readFileSync(path.join(dir, p))); }
    else throw new Error(`File speciale nella copia esistente: ${p}`);
  }
  return result;
}
const uguali = (a, b) => Object.keys(a).length === Object.keys(b).length && Object.keys(a).every((k) => a[k] === b[k]);

export function installa(pacchetto, { configDir = process.env.CLAUDE_CONFIG_DIR || path.join(os.homedir(), '.claude'), sostituisci = false } = {}) {
  const { commit, files } = pacchetto;
  if (!/^[a-f0-9]{40}$/.test(commit) || !Object.hasOwn(files, 'SKILL.md') || Object.keys(files).some((p) => !nomeSicuro(p))) {
    throw new Error('Pacchetto non valido.');
  }
  configDir = path.resolve(configDir);
  cartellaSicura(configDir);
  const skills = path.join(configDir, 'skills');
  cartellaSicura(skills);
  const target = path.join(skills, 'crea-funnel');
  const lock = path.join(configDir, '.crea-funnel-install.lock');
  let fd;
  try { fd = fs.openSync(lock, 'wx', 0o600); }
  catch (e) { if (e.code === 'EEXIST') throw new Error(`Installazione già in corso o interrotta. Controlla il blocco prima di riprovare: ${lock}`); throw e; }
  let staging, backup;
  try {
    fs.writeFileSync(fd, JSON.stringify({ pid: process.pid, started: new Date().toISOString() }));
    const hashes = Object.fromEntries(Object.entries(files).map(([p, data]) => [p, sha256(data)]));
    const esistente = stat(target);
    if (esistente) {
      if (!esistente.isDirectory() || esistente.isSymbolicLink()) throw new Error(`La destinazione non è una cartella normale: ${target}`);
      const attuali = impronta(target);
      if (uguali(attuali, hashes)) return { stato: 'gia-aggiornata', target, commit };
      let precedente;
      try { precedente = JSON.parse(fs.readFileSync(path.join(target, ricevuta), 'utf8')); } catch { /* Copia manuale o ricevuta danneggiata. */ }
      const gestita = precedente?.repository === repository && precedente.schema === 1 && precedente.files && uguali(attuali, precedente.files);
      if (!gestita && !sostituisci) throw new Error('Copia locale non gestita o modificata. Nulla sostituito. Chiedi conferma e ripeti con --sostituisci per conservarla in backup e installare la nuova versione.');
    }
    const backups = path.join(configDir, 'backups', 'crea-funnel');
    cartellaSicura(backups);
    staging = fs.mkdtempSync(path.join(backups, 'installazione-'));
    const nuova = path.join(staging, 'nuova');
    fs.mkdirSync(nuova, { mode: 0o700 });
    for (const [p, data] of Object.entries(files)) {
      fs.mkdirSync(path.dirname(path.join(nuova, p)), { recursive: true, mode: 0o700 });
      fs.writeFileSync(path.join(nuova, p), data, { flag: 'wx', mode: 0o644 });
    }
    fs.writeFileSync(path.join(nuova, ricevuta), JSON.stringify({ schema: 1, repository, commit, files: hashes }, null, 2) + '\n', { flag: 'wx', mode: 0o600 });
    if (!uguali(impronta(nuova), hashes)) throw new Error('Verifica della copia preparata fallita.');
    if (esistente) {
      backup = path.join(staging, 'precedente');
      fs.renameSync(target, backup);
    }
    try { fs.renameSync(nuova, target); }
    catch (e) {
      if (backup && !stat(target)) fs.renameSync(backup, target);
      throw e;
    }
    return { stato: esistente ? 'aggiornata' : 'installata', target, commit, backup: backup || null };
  } catch (e) {
    if (staging) e.message += ` Materiali di recupero conservati in: ${staging}`;
    throw e;
  } finally {
    fs.closeSync(fd);
    fs.unlinkSync(lock);
  }
}

async function main() {
  const args = process.argv.slice(2);
  if (args.includes('--help')) {
    console.log(`Uso: node installa.mjs [--sostituisci] [--ref COMMIT]\n\nInstalla o aggiorna /crea-funnel da GitHub Copynerd. Richiede Node.js 22+.\nOpzioni:\n  --help           Mostra questo aiuto senza accessi alla rete o scritture.\n  --sostituisci    Conferma la sostituzione di una copia manuale o modificata.\n                  La copia precedente è sempre conservata in backup.\n  --ref COMMIT     Usa un commit completo, anziché l'ultima versione di main.\n\nDestinazione: CLAUDE_CONFIG_DIR/skills/crea-funnel, oppure ~/.claude/skills/crea-funnel.\nBackup: cartella backups/crea-funnel dentro la configurazione di Claude.\nNon legge chiavi e non modifica impostazioni, plugin o materiali di Copy Genius.`);
    return;
  }
  if (Number(process.versions.node.split('.')[0]) < 22) throw new Error('Serve Node.js 22 o successiva.');
  let ref; let sostituisci = false;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--sostituisci') sostituisci = true;
    else if (args[i] === '--ref' && args[i + 1]) ref = args[++i];
    else throw new Error(`Opzione non riconosciuta o incompleta: ${args[i]}. Usa --help.`);
  }
  const r = installa(await preparaPacchetto({ ref }), { sostituisci });
  console.log(JSON.stringify(r, null, 2));
  console.log('Apri una nuova sessione di Claude Code e usa /crea-funnel.');
}
if (process.argv[1] && fs.existsSync(process.argv[1]) && fs.realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((e) => { console.error(`Installazione non completata: ${e.message}`); process.exitCode = 1; });
}
