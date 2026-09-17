// Prove con materiali fittizi, API esclusivamente locali e nessuna pubblicazione.
// Eseguire con CREA_FUNNEL_HOME puntato alle dipendenze preparate dalla skill.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import http from 'node:http';
import { fileURLToPath } from 'node:url';
import { execFile, spawn } from 'node:child_process';
import { promisify } from 'node:util';
import { percorsoInterno, preparaApi, carica, cartellaDipendenze, ambienteDipendenze } from '../strumenti/comune.mjs';
import { valutaAclWindows, verificaPermessi } from '../strumenti/permessi-segreti.mjs';
import { avviaAnteprima } from '../strumenti/server-anteprima.mjs';

const strumenti = fileURLToPath(new URL('../strumenti/', import.meta.url));
const radice = fs.mkdtempSync(path.join(os.tmpdir(), 'crea-funnel-regressioni-'));
const ambiente = { ...process.env };
for (const k of Object.keys(ambiente)) if (/OPENAI|CLOUDFLARE|^CF_|TOKEN|SECRET|API_KEY/.test(k)) delete ambiente[k];
const exec = promisify(execFile);
const scrivi = (file, contenuto) => { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, contenuto); return file; };
const cartella = (nome) => { const d = path.join(radice, nome); fs.mkdirSync(d, { recursive: true }); return d; };
// Anche i comandi non API (per esempio il dry-run) devono leggere solo questo file fittizio.
ambiente.CREA_FUNNEL_SEGRETI = scrivi(path.join(radice, 'segreti-fittizi.env'), '');
async function cli(nome, args = []) {
  try { const r = await exec(process.execPath, [path.join(strumenti, nome), ...args], { env: ambiente, cwd: radice, timeout: 90000, maxBuffer: 4 * 1024 * 1024 }); return { codice: 0, testo: r.stdout + r.stderr }; }
  catch (e) { if (e.killed) throw e; return { codice: e.code, testo: (e.stdout || '') + (e.stderr || '') }; }
}
const ok = (r) => assert.equal(r.codice, 0, r.testo);
const fallisce = (r) => assert.notEqual(r.codice, 0, r.testo);
async function server(t, handler) {
  const s = http.createServer(handler);
  await new Promise((resolve) => s.listen(0, '127.0.0.1', resolve));
  t.after(() => { s.closeAllConnections(); return new Promise((resolve) => s.close(resolve)); });
  return `http://127.0.0.1:${s.address().port}`;
}
const json = (r, body, stato = 200) => { r.writeHead(stato, { 'Content-Type': 'application/json' }); r.end(JSON.stringify(body)); };
const html = (body, css = '.funnel {color:#111;background:#fff;font:18px Arial;} .funnel section {padding:20px;}') => `<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Prova</title><style>${css}</style></head><body><div class="funnel">${body}</div></body></html>`;

test('tutti i comandi documentati espongono --help senza dipendenze o chiamate', async () => {
  for (const f of fs.readdirSync(strumenti).filter((f) => f.endsWith('.mjs') && fs.readFileSync(path.join(strumenti, f), 'utf8').startsWith('#!'))) {
    const r = await cli(f, ['--help']); ok(r); assert.match(r.testo, /Uso:|Opzioni:/, f);
    const codice = fs.readFileSync(path.join(strumenti, f), 'utf8');
    for (const [, opzione] of codice.matchAll(/'(\-\-[a-z][a-z-]+)'\s*:\s*'(?:flag|testo|numero|lista)'/g)) assert.ok(r.testo.includes(opzione), `${f}: ${opzione} assente da --help`);
  }
});

test('documentazione: nomi degli script esistenti e percorso studenti preservato', () => {
  const skill = path.dirname(strumenti.replace(/\/$/, ''));
  const documenti = [path.join(skill, 'SKILL.md'), path.join(skill, 'LEGGIMI.md'), path.join(strumenti, 'LEGGIMI.md'), ...fs.readdirSync(path.join(skill, 'riferimenti')).filter((n) => n.endsWith('.md')).map((n) => path.join(skill, 'riferimenti', n))];
  for (const f of documenti) for (const [, nome] of fs.readFileSync(f, 'utf8').matchAll(/\b([a-z][a-z.-]+\.mjs)\b/g)) assert.ok(fs.existsSync(path.join(strumenti, nome)) || fs.existsSync(path.join(skill, 'test', nome)), `${f}: ${nome} non esiste`);
  assert.match(fs.readFileSync(path.join(skill, 'riferimenti/copy-genius.md'), 'utf8'), /~\/Desktop\/copy-genius\//);
  const principale = fs.readFileSync(path.join(skill, 'SKILL.md'), 'utf8');
  assert.match(principale, /^disable-model-invocation: true$/m);
  assert.match(principale, /^argument-hint:/m);
});

test('percorsi confinati: traversal, assoluti e symlink rifiutati', () => {
  const d = cartella('confini');
  assert.equal(percorsoInterno(d, 'copia/file.css'), path.join(d, 'copia/file.css'));
  for (const p of ['../brand.md', '/tmp/brand.md', '.']) assert.throws(() => percorsoInterno(d, p));
  fs.symlinkSync(cartella('originali'), path.join(d, 'collegamento'));
  assert.throws(() => percorsoInterno(d, 'collegamento/brand.md'));
});

test('API: niente credenziali vere a host alternativi o server di prova', () => {
  const segreti = scrivi(path.join(cartella('api'), 'segreti.env'), 'OPENAI_API_KEY=chiave-fittizia-da-non-inviare\n');
  for (const u of ['http://api.openai.com/v1', 'https://altro.example/v1', 'https://api.openai.com/v1?altro=1']) assert.throws(() => preparaApi('openai', u, false, segreti));
  assert.throws(() => preparaApi('openai', 'http://127.0.0.1:1234/v1', true, segreti));
  assert.throws(() => preparaApi('openai', 'http://localhost:1234/v1', true));
  assert.equal(preparaApi('openai', 'http://127.0.0.1:1234/v1', true).segreti.valori.OPENAI_API_KEY, 'crea-funnel-test-openai');
});

test('accessi OpenAI: modello richiesto assente non equivale a pronto', async (t) => {
  let modelli = [];
  const url = await server(t, (q, r) => { assert.equal(q.headers.authorization, 'Bearer crea-funnel-test-openai'); json(r, { data: modelli.map((id) => ({ id })) }); });
  const args = ['--solo', 'openai', '--modalita-test', '--base-openai', url];
  fallisce(await cli('accessi.mjs', args));
  modelli = ['gpt-image-1']; fallisce(await cli('accessi.mjs', args));
  modelli = ['gpt-image-2.5-sunburst']; const r = await cli('accessi.mjs', args); ok(r); assert.match(r.testo, /credito.*non verificat/);
});

test('accessi Cloudflare: zona negata, assente e sottodominio di zona attiva', async (t) => {
  let modo = 'negata';
  const url = await server(t, (q, r) => {
    assert.equal(q.headers.authorization, 'Bearer crea-funnel-test-cloudflare');
    const u = new URL(q.url, 'http://localhost');
    if (u.pathname.endsWith('/verify')) return json(r, { success: true, result: { status: 'active' } });
    if (u.pathname.endsWith('/zones')) return modo === 'negata' ? json(r, { success: false, errors: [{ code: 10000, message: 'denied' }] }, 403) : json(r, { success: true, result: modo === 'attiva' && u.searchParams.get('name') === 'example.test' ? [{ name: 'example.test', status: 'active' }] : [] });
    json(r, { success: true, result: u.pathname.endsWith('/scripts') ? [] : { name: 'Account fittizio' } });
  });
  const args = ['--solo', 'cloudflare', '--dominio', 'prova.example.test', '--modalita-test', '--base-cloudflare', url];
  fallisce(await cli('accessi.mjs', args));
  modo = 'assente'; fallisce(await cli('accessi.mjs', args));
  modo = 'attiva'; const r = await cli('accessi.mjs', args); ok(r); assert.match(r.testo, /scrittura|pubblicazione/);
});

test('redirect API non seguito neppure su server di test', async (t) => {
  let destinazioneChiamata = false;
  const url = await server(t, (q, r) => {
    if (q.url.endsWith('/models')) { r.writeHead(302, { Location: '/ricevi' }); return r.end(); }
    destinazioneChiamata = true; json(r, {});
  });
  fallisce(await cli('accessi.mjs', ['--solo', 'openai', '--modalita-test', '--base-openai', url]));
  assert.equal(destinazioneChiamata, false);
});

test('generazioni: ripiego conteggiato, tetto concorrente, interruzioni vecchie e registro corrotto', async (t) => {
  const d = cartella('generazioni'); let chiamate = 0; const richieste = [];
  const url = await server(t, async (q, r) => {
    chiamate++; assert.equal(q.headers.authorization, 'Bearer crea-funnel-test-openai');
    let body = ''; for await (const c of q) body += c; richieste.push(JSON.parse(body));
    if (chiamate === 1) return json(r, { error: { message: 'quality unsupported', param: 'quality' } }, 400);
    json(r, { data: [{ b64_json: Buffer.from('immagine fittizia per test API').toString('base64') }] });
  });
  const args = (nome, registro, tetto) => ['--prompt', 'prova fittizia', '--uscita', path.join(d, nome + '.png'), '--registro', path.join(d, registro), '--tetto', String(tetto), '--modalita-test', '--indirizzo-base', url];
  ok(await cli('genera-immagine.mjs', args('uno', 'registro.jsonl', 2)));
  assert.deepEqual(richieste.map((r) => r.quality), ['max', 'xhigh']);
  fallisce(await cli('genera-immagine.mjs', args('due', 'registro.jsonl', 2))); assert.equal(chiamate, 2);
  scrivi(path.join(d, 'interrotto.jsonl.in-corso'), JSON.stringify({ id: 'richiesta-interrotta', data: '2000-01-01T00:00:00Z' }) + '\n');
  fallisce(await cli('genera-immagine.mjs', args('tre', 'interrotto.jsonl', 1))); assert.equal(chiamate, 2);
  scrivi(path.join(d, 'corrotto.jsonl'), '{registro interrotto');
  fallisce(await cli('genera-immagine.mjs', args('quattro', 'corrotto.jsonl', 2))); assert.equal(chiamate, 2);
  const parallele = await Promise.all(['a', 'b'].map((n) => cli('genera-immagine.mjs', args(n, 'concorrente.jsonl', 1))));
  assert.equal(parallele.filter((r) => r.codice === 0).length, 1); assert.equal(chiamate, 3);
  assert.doesNotMatch(fs.readFileSync(path.join(d, 'registro.jsonl'), 'utf8'), /crea-funnel-test-openai/);
});

test('credenziali: scansione completa, segreto noto, file troppo grande e symlink', async () => {
  const segreti = scrivi(path.join(cartella('segreti-fittizi'), 'valori.env'), 'OPENAI_API_KEY=solo-valore-fittizio-per-test\n');
  const d = cartella('scansione'); scrivi(path.join(d, 'index.html'), 'pagina innocua');
  ok(await cli('controlla-credenziali.mjs', [d, '--segreti', segreti]));
  scrivi(path.join(d, 'dati.txt'), 'solo-valore-fittizio-per-test');
  const r = await cli('controlla-credenziali.mjs', [d, '--segreti', segreti]); fallisce(r); assert.doesNotMatch(r.testo, /solo-valore-fittizio-per-test/);
  const grandi = cartella('file-grande'); const f = scrivi(path.join(grandi, 'video.mp4'), ''); fs.truncateSync(f, 201 * 1024 * 1024);
  const incompleto = await cli('controlla-credenziali.mjs', [grandi, '--segreti', segreti]); fallisce(incompleto); assert.match(incompleto.testo, /incomplet|parziale/i);
  const link = cartella('symlink'); fs.symlinkSync(path.join(d, 'index.html'), path.join(link, 'index.html'));
  fallisce(await cli('controlla-credenziali.mjs', [link, '--segreti', segreti]));
  fallisce(await cli('controlla-credenziali.mjs', [d, '--segreti', path.join(radice, 'inesistente.env')]));
});

test('permessi: POSIX reali e decisioni ACL Windows', async () => {
  const d = cartella('permessi'); const f = scrivi(path.join(d, 'segreti.env'), '');
  if (process.platform !== 'win32') {
    fs.chmodSync(f, 0o600); assert.equal((await verificaPermessi(f)).ok, true);
    fs.chmodSync(f, 0o644); assert.equal((await verificaPermessi(f)).ok, false);
  }
  const acl = { protetta: true, utente: 'S-1-test', regole: [{ sid: 'S-1-test', tipo: 'Allow' }] };
  assert.equal(valutaAclWindows(acl), true);
  assert.equal(valutaAclWindows({ ...acl, protetta: false }), false);
  assert.equal(valutaAclWindows({ ...acl, regole: [...acl.regole, { sid: 'S-1-altro', tipo: 'Allow' }] }), false);
  assert.equal(valutaAclWindows({ ...acl, regole: [] }), false);
});

test('copy Markdown: testo del link conservato, vere note escluse', async () => {
  const d = cartella('copy'); scrivi(path.join(d, 'index.html'), html('<section><h1>Titolo</h1><a href="/offerta">Scopri di più</a><p>Testo vero.</p></section>'));
  const copy = scrivi(path.join(d, 'copy.md'), '## SEZIONE 1\n[H1] Titolo\n[Scopri di più](/offerta)\n[DESIGN NOTE: ignorare]\nTesto vero.\n');
  ok(await cli('confronta-copy.mjs', [d, copy]));
});

test('pagine: file orfani inclusi, attesa mancante e limite non sono successi', async () => {
  const d = cartella('pagine'); scrivi(path.join(d, 'index.html'), html('<section><h1>Pagina buona</h1></section>'));
  ok(await cli('controlla-pagine.mjs', [d, '--tutte', '--attesa', '/', '--finale']));
  scrivi(path.join(d, 'grazie.html'), html('<section><h1>Grazie</h1><img src="manca.png" alt="foto" width="20" height="20"></section>'));
  const r = await cli('controlla-pagine.mjs', [d, '--tutte']); fallisce(r); assert.match(r.testo, /grazie/);
  const limite = await cli('controlla-pagine.mjs', [d, '--tutte', '--massimo-pagine', '1']); fallisce(limite); assert.match(limite.testo, /limite|massimo|non controllat/i);
  fallisce(await cli('controlla-pagine.mjs', [d, '--attesa', '/mai-costruita']));
});

test('editor: conversione buona, attributi script e applicazione mappa', async (t) => {
  const d = cartella('editor-buono'); const out = path.join(d, 'consegna');
  const url = await server(t, (q, r) => { r.writeHead(200, { 'Content-Type': 'text/javascript', 'Access-Control-Allow-Origin': '*' }); r.end('window.provaModulo = true; export const numero = 1;'); });
  scrivi(path.join(d, 'index.html'), html(`<header data-parte="header">Marchio</header><section id="uno"><h1>Titolo</h1></section><section id="due"><p>Seconda sezione</p></section><footer data-parte="footer">Fine</footer>`) .replace('</body>', `<script type="module" crossorigin="anonymous" referrerpolicy="no-referrer" src="${url}/modulo.js"></script></body>`));
  ok(await cli('frammenti-editor.mjs', [path.join(d, 'index.html'), '--radice', d, '--uscita', out, '--contenitore', '.funnel', '--per-sezione']));
  const frammenti = fs.readdirSync(path.join(out, 'index/frammenti')).filter((n) => /script/.test(n));
  assert.equal(frammenti.length, 1);
  const script = fs.readFileSync(path.join(out, 'index/frammenti', frammenti[0]), 'utf8');
  assert.match(script, /type="module"/); assert.match(script, /crossorigin="anonymous"/); assert.match(script, /referrerpolicy="no-referrer"/);
  assert.equal(JSON.parse(fs.readFileSync(path.join(out, 'index/conversione.json'))).completa, true);
  ok(await cli('frammenti-editor.mjs', ['--applica-mappa', out]));
  assert.ok(fs.existsSync(path.join(out, 'index/anteprima-con-indirizzi.html')));
});

test('editor: CSS fuori contenitore, nesting, layout alterato e CSS assente bloccati', async () => {
  for (const [nome, css, extra] of [
    ['fratello', '.funnel + footer {color:red}', ''],
    ['annidato', '.funnel { & + footer {color:red} }', ''],
    ['classe-escapata', '.funnel\\31 {color:red}', ''],
    ['layout', '.funnel {display:grid;gap:70px;padding:40px;color:#111;background:white}', ''],
    ['foglio-assente', '.funnel {color:#111}', '<link rel="stylesheet" href="/manca.css">'],
  ]) {
    const d = cartella('editor-' + nome); const out = path.join(d, 'consegna');
    scrivi(path.join(d, 'index.html'), html('<header data-parte="header">Brand</header><section id="uno"><h1>Titolo</h1></section><footer data-parte="footer">Fine</footer>', css).replace('</head>', extra + '</head>'));
    fallisce(await cli('frammenti-editor.mjs', [path.join(d, 'index.html'), '--radice', d, '--uscita', out, '--contenitore', '.funnel', '--per-sezione']));
    assert.equal(JSON.parse(fs.readFileSync(path.join(out, 'index/conversione.json'))).completa, false, nome);
    fallisce(await cli('frammenti-editor.mjs', ['--applica-mappa', out]));
  }
});

test('editor: anteprima post-mappa comune con link interni e pagina non collegata', async () => {
  const d = cartella('editor-navigazione'); const ingresso = path.join(d, 'pubblico'); const out = path.join(d, 'consegna');
  const parti = (titolo) => `<header data-parte="header"><a href="/landing">Brand</a></header><section><h1>${titolo}</h1></section><footer data-parte="footer">Fine</footer>`;
  scrivi(path.join(ingresso, 'landing.html'), html(parti('Landing')));
  scrivi(path.join(ingresso, 'grazie.html'), html(parti('Grazie')));
  ok(await cli('frammenti-editor.mjs', [ingresso, '--uscita', out, '--contenitore', '.funnel']));
  ok(await cli('frammenti-editor.mjs', ['--applica-mappa', out]));
  ok(await cli('controlla-pagine.mjs', [path.join(out, 'anteprima-con-indirizzi'), '--percorso', '/landing', '--tutte', '--attesa', '/landing', '--attesa', '/grazie', '--finale']));
});

test('immagini, screenshot versionati e mappa media mantengono le risorse', async (t) => {
  const d = cartella('media'); const sharp = await carica('sharp');
  const foto = path.join(d, 'foto.png'); await sharp({ create: { width: 100, height: 60, channels: 3, background: '#996633' } }).png().toFile(foto);
  const originale = fs.readFileSync(foto);
  const risorse = path.join(d, 'sorgente/risorse/foto');
  ok(await cli('ottimizza-immagini.mjs', [foto, '--uscita', risorse, '--larghezze', '50,100', '--percorso-web', '/risorse/foto', '--alt', 'Immagine fittizia']));
  assert.deepEqual(fs.readFileSync(foto), originale);
  const webp = fs.readdirSync(risorse).find((n) => n.endsWith('.webp'));
  const file = scrivi(path.join(d, 'sorgente/index.html'), html(`<section id="uno"><h1>Foto</h1><img src="/risorse/foto/${webp}" alt="Immagine fittizia" width="50" height="30"></section>`));
  const out = path.join(d, 'consegna');
  ok(await cli('frammenti-editor.mjs', [file, '--radice', path.join(d, 'sorgente'), '--uscita', out, '--contenitore', '.funnel']));
  fallisce(await cli('frammenti-editor.mjs', ['--applica-mappa', out]));
  assert.equal(fs.existsSync(path.join(out, 'index/frammenti-con-indirizzi')), false);
  const s = await avviaAnteprima({ cartella: path.join(out, 'index/media-da-caricare'), porta: 0 }); t.after(() => s.chiudi());
  const mappa = path.join(out, 'index/mappa-media.txt');
  scrivi(mappa, fs.readFileSync(mappa, 'utf8').replace(/^([a-z0-9._-]+) =\s*$/gm, (_, n) => `${n} = ${s.indirizzo}/${n}`));
  ok(await cli('frammenti-editor.mjs', ['--applica-mappa', out]));
  const pagina = path.join(out, 'index/anteprima-con-indirizzi.html');
  ok(await cli('controlla-pagine.mjs', [pagina, '--domini-ammessi', '127.0.0.1', '--finale']));
  for (const v of ['v1', 'v2']) {
    const uscita = path.join(d, 'controlli/prova-stile', v);
    ok(await cli('screenshot.mjs', [pagina, '--uscita', uscita, '--nome', 'prova-stile']));
    assert.equal(fs.readdirSync(uscita).filter((n) => n.endsWith('.png')).length, 4);
  }
});

test('riferimento statico completo; originali mancanti impediscono falso successo', async (t) => {
  const d = cartella('riferimento-completo');
  const url = await server(t, (q, r) => { r.writeHead(200, { 'Content-Type': 'text/html' }); r.end(html('<section><h1>Stile di prova</h1><p>Solo contenuti statici.</p></section>')); });
  const out = path.join(d, 'copia');
  ok(await cli('salva-riferimento.mjs', [url, out]));
  ok(await cli('salva-riferimento.mjs', ['--solo-verifica', out]));
  fs.renameSync(path.join(out, 'screenshot'), path.join(out, 'screenshot-conservati'));
  const incompleta = await cli('salva-riferimento.mjs', ['--solo-verifica', out]);
  fallisce(incompleta); assert.match(incompleta.testo, /mancano screenshot/);
});

test('riferimenti: risorse con traversal non possono modificare materiali esterni', async (t) => {
  const d = cartella('riferimento'); const protetto = scrivi(path.join(d, 'brand.md'), 'ORIGINALE INVIOLABILE');
  const url = await server(t, (q, r) => {
    if (q.url.includes('%2F')) { r.writeHead(200, { 'Content-Type': 'text/css' }); return r.end('body { color: red; }'); }
    r.writeHead(200, { 'Content-Type': 'text/html' }); r.end('<!doctype html><link rel="stylesheet" href="/%2F..%2F..%2F..%2Fbrand.md"><h1>Riferimento</h1>');
  });
  const r = await cli('salva-riferimento.mjs', [url, path.join(d, 'salvataggio')]); fallisce(r); assert.match(r.testo, /sicuro|percorso/i);
  assert.equal(fs.readFileSync(protetto, 'utf8'), 'ORIGINALE INVIOLABILE');
  const visivo = path.join(d, 'solo-visivo'); ok(await cli('salva-riferimento.mjs', [url, visivo, '--solo-visivo']));
  assert.equal(fs.readdirSync(path.join(visivo, 'screenshot')).length, 4);
  assert.match(fs.readFileSync(path.join(visivo, 'riferimento-visivo.md'), 'utf8'), /parziale/);
});

test('assemblaggio ripetibile e pubblicazione --prova senza credenziali', async () => {
  const d = cartella('flusso');
  scrivi(path.join(d, 'sorgente/index.html'), html('<!-- @parte header --><section><h1>Pagina fittizia</h1></section><!-- @parte footer -->'));
  scrivi(path.join(d, 'parti/header.html'), '<header>Brand</header>'); scrivi(path.join(d, 'parti/footer.html'), '<footer>Fine</footer>');
  scrivi(path.join(d, 'sorgente/_headers'), '/*\n  X-Robots-Tag: noindex, nofollow\n');
  scrivi(path.join(d, 'sorgente/risorse/prova.svg'), '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"></svg>');
  const sorgente = fs.readFileSync(path.join(d, 'sorgente/index.html'), 'utf8');
  ok(await cli('assembla.mjs', [d])); ok(await cli('assembla.mjs', [d]));
  assert.equal(fs.readFileSync(path.join(d, 'sorgente/index.html'), 'utf8'), sorgente);
  assert.ok(fs.existsSync(path.join(d, 'pubblico/_headers'))); assert.ok(fs.existsSync(path.join(d, 'pubblico/risorse/prova.svg')));
  scrivi(path.join(d, 'wrangler.jsonc'), JSON.stringify({ name: 'collaudo-fittizio', compatibility_date: '2026-09-01', assets: { directory: './pubblico', not_found_handling: 'none', html_handling: 'auto-trailing-slash' }, workers_dev: false, preview_urls: false, routes: [{ pattern: 'collaudo.example.test', custom_domain: true }] }));
  ok(await cli('pubblica-cloudflare.mjs', [path.join(d, 'wrangler.jsonc'), '--prova']));
});

test('anteprima: redirect e intestazioni, compresi HTML canonici e 404', async (t) => {
  const d = cartella('routing'); scrivi(path.join(d, 'index.html'), 'Indice'); scrivi(path.join(d, 'landing.html'), 'Pagina');
  scrivi(path.join(d, '_redirects'), '/vecchia /landing 302\n'); scrivi(path.join(d, '_headers'), '/*\n  X-Robots-Tag: noindex\n');
  const s = await avviaAnteprima({ cartella: d, porta: 0 }); t.after(() => s.chiudi());
  for (const [p, stato, location] of [['/vecchia', 302, '/landing'], ['/landing.html', 307, '/landing'], ['/landing', 200, null], ['/assente', 404, null]]) {
    const r = await fetch(s.indirizzo + p, { redirect: 'manual' }); assert.equal(r.status, stato); assert.equal(r.headers.get('location'), location); assert.equal(r.headers.get('x-robots-tag'), 'noindex'); await r.arrayBuffer();
  }
});

test('anteprima confrontata col runtime locale ufficiale di Wrangler', async (t) => {
  const d = cartella('parita-cloudflare'); const pubblico = path.join(d, 'pubblico');
  scrivi(path.join(pubblico, 'index.html'), 'Indice'); scrivi(path.join(pubblico, 'landing.html'), 'Pagina');
  scrivi(path.join(pubblico, 'cartella/index.html'), 'Pagina annidata');
  scrivi(path.join(pubblico, '_redirects'), '/vecchia /landing 302\n/inoltro /landing 200\n');
  scrivi(path.join(pubblico, '_headers'), '/*\n  X-Robots-Tag: noindex\n');
  const config = scrivi(path.join(d, 'wrangler.jsonc'), JSON.stringify({ name: 'parita-locale', compatibility_date: '2026-09-17', workers_dev: false, assets: { directory: './pubblico', html_handling: 'auto-trailing-slash', not_found_handling: 'none' } }));
  const wrangler = path.join(cartellaDipendenze(), 'node_modules/wrangler/bin/wrangler.js');
  const figlio = spawn(process.execPath, [wrangler, 'dev', '--local', '--config', config, '--ip', '127.0.0.1', '--port', '0', '--inspector-port', '0', '--persist-to', path.join(d, 'stato')], { cwd: d, env: { ...ambiente, ...ambienteDipendenze(), CI: 'true' }, stdio: ['ignore', 'pipe', 'pipe'] });
  const terminato = new Promise((resolve) => figlio.once('close', resolve));
  t.after(async () => { figlio.kill('SIGTERM'); const timer = setTimeout(() => figlio.kill('SIGKILL'), 5000); try { await terminato; } finally { clearTimeout(timer); } });
  const ufficiale = await new Promise((resolve, reject) => {
    let output = ''; const timer = setTimeout(() => reject(new Error(`Wrangler non pronto entro 45 secondi: ${output}`)), 45000);
    const ricevi = (data) => { output += data; const m = output.match(/Ready on (http:\/\/127\.0\.0\.1:\d+)/); if (m) { clearTimeout(timer); resolve(m[1]); } };
    figlio.stdout.on('data', ricevi); figlio.stderr.on('data', ricevi);
    figlio.once('error', (e) => { clearTimeout(timer); reject(e); });
    figlio.once('exit', (codice) => { clearTimeout(timer); reject(new Error(`Wrangler terminato (${codice}): ${output}`)); });
  });
  const s = await avviaAnteprima({ cartella: pubblico, porta: 0 }); t.after(() => s.chiudi());
  for (const p of ['/', '/vecchia?x=1', '/landing.html', '/landing', '/cartella', '/cartella/index.html', '/inoltro', '/assente']) {
    const risposte = await Promise.all([s.indirizzo, ufficiale].map(async (base) => {
      const r = await fetch(base + p, { redirect: 'manual' });
      return { stato: r.status, location: r.headers.get('location'), robots: r.headers.get('x-robots-tag'), corpo: await r.text() };
    }));
    assert.deepEqual(risposte[0], risposte[1], `differenza su ${p}`);
  }
});

test.after(() => console.log(`Materiali fittizi e rapporti conservati in ${radice}`));
