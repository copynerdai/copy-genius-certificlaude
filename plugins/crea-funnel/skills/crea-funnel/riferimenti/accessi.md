# Accessi e ambiente

Prepara solo ciò che il piano richiede: l'ambiente sempre; la chiave OpenAI solo se le immagini si generano con l'API; token e account Cloudflare solo se si pubblica su Cloudflare.

## Modello Claude

Raccomanda alla persona di usare il modello Claude più potente disponibile nel suo piano (in Claude Code si cambia con il comando `/model`): da lui dipendono la qualità delle domande, del codice e dei controlli. Se la sessione gira con un modello meno capace, dillo una volta all'inizio e prosegui.

## 1. Ambiente

Gli strumenti usano Node.js 22 o successiva e alcune dipendenze installate fuori dal plugin, in `~/.crea-funnel/` (su Windows `%USERPROFILE%\.crea-funnel\`): Playwright con Chromium per aprire le pagine, sharp per le immagini, Wrangler per Cloudflare.

1. Controlla: `node "<skill>/strumenti/prepara-ambiente.mjs" --controlla`.
2. Se Node.js manca o è più vecchio della 22, chiedi alla persona di installare la versione LTS da https://nodejs.org, di chiudere e riaprire il terminale e Claude Code, poi ricontrolla.
3. Se manca altro: `node "<skill>/strumenti/prepara-ambiente.mjs"`. Scarica circa 1 GB e può richiedere qualche minuto: avvisa la persona prima di lanciarlo. Crea anche `segreti.env` vuoto, leggibile solo dal suo utente.
4. Ricontrolla con `--controlla`.

**Completato quando:** `--controlla` esce con 0 e scrive «Ambiente pronto».

## 2. Dove vanno le chiavi

Le chiavi stanno solo in `segreti.env`:
- macOS e Linux: `~/.crea-funnel/segreti.env`
- Windows: `%USERPROFILE%\.crea-funnel\segreti.env`

Regole da dire alla persona:
- apre il file con un editor di testo e incolla ogni valore subito dopo il segno `=`, senza spazi né virgolette, poi salva;
- non incolla mai le chiavi in chat, in un documento del Vault o in un'email;
- se una chiave finisce in chat o in un file condiviso, la considera esposta: la revoca sul servizio e ne crea una nuova.

Puoi aprire il file per lei con l'editor predefinito, senza leggerlo: `open -e ~/.crea-funnel/segreti.env` su macOS, `notepad "%USERPROFILE%\.crea-funnel\segreti.env"` su Windows, `xdg-open ~/.crea-funnel/segreti.env` su Linux. Non leggere mai il contenuto di `segreti.env`: gli strumenti lo leggono da soli e non stampano i valori.

## 3. Chiave OpenAI

Serve solo se il piano prevede immagini generate con l'API. Passaggi personali, da fare con il proprio account:

1. Accedere a https://platform.openai.com.
2. Controllare di avere credito nella sezione della fatturazione («Billing») delle impostazioni: le generazioni sono a pagamento.
3. Nelle impostazioni aprire «API keys» e creare una nuova chiave segreta («Create new secret key»), con un nome riconoscibile, per esempio `crea-funnel`.
4. Copiare la chiave subito: viene mostrata una sola volta.
5. Incollarla in `segreti.env` dopo `OPENAI_API_KEY=`.

Se le etichette del sito sono cambiate, cerca «API keys» nelle impostazioni dell'account.

## 4. Token e account Cloudflare

Serve solo se il piano prevede la pubblicazione su Cloudflare. Il dominio deve essere già attivo nell'account Cloudflare della persona o del cliente.

1. Accedere a https://dash.cloudflare.com.
2. Dal profilo utente aprire «API Tokens» e scegliere «Create Token».
3. Partire dal modello «Edit Cloudflare Workers». In «Account Resources» includere solo l'account giusto; in «Zone Resources» includere solo il dominio su cui si pubblica. La verifica gratuita controlla lettura dell'account, dei Worker e della zona scelta; non certifica i permessi di scrittura. Se la pubblicazione autorizzata segnala un permesso mancante, verifica quello specifico nelle istruzioni ufficiali di Cloudflare, senza ampliare il token a tutti gli account o domini.
4. Continuare al riepilogo, creare il token e copiarlo subito: viene mostrato una sola volta.
5. Incollarlo in `segreti.env` dopo `CLOUDFLARE_API_TOKEN=`.
6. Copiare l'identificativo dell'account («Account ID»): si trova nella panoramica dell'account o di «Workers & Pages». Incollarlo dopo `CLOUDFLARE_ACCOUNT_ID=`.

## 5. Verifica

Verifica solo i servizi del piano, con chiamate gratuite:
- immagini: `node "<skill>/strumenti/accessi.mjs" --solo openai --modello <modello del piano>`
- Cloudflare: `node "<skill>/strumenti/accessi.mjs" --solo cloudflare --dominio <dominio del piano>`

| Esito | Cosa dire alla persona |
|---|---|
| chiave «manca» | aprire `segreti.env`, incollare il valore dopo il segno `=` e salvare |
| «chiave rifiutata» o «token rifiutato» | ricopiare il valore intero, senza spazi; se non basta, crearne uno nuovo |
| OpenAI valida ma modello richiesto non visibile | verificare l'accesso a quel modello nelle impostazioni del progetto OpenAI; nel frattempo le immagini si possono fare a mano in ChatGPT (vedi `costruzione.md`) |
| Cloudflare «permessi insufficienti» | ricreare il token con il modello «Edit Cloudflare Workers» |
| nessun dominio visibile | il dominio non è nell'account o il token non lo include |
| servizio non raggiungibile | controllare la connessione a Internet |

Scrivi l'esito nella sezione «Accessi» di `piano.md`, senza valori.

**Completato quando:** per ogni servizio del piano `accessi.mjs` esce con 0 con prove reali di lettura, e l'esito «prerequisiti accessi verificati» è registrato. `--senza-prove` certifica soltanto la presenza dei valori, `--modalita-test` non verifica account reali: non valgono per questo passo. Senza servizi a pagamento resta comunque obbligatorio «Ambiente pronto».

Le chiamate gratuite non misurano il credito OpenAI né provano la generazione; non dimostrano i permessi di scrittura Cloudflare. Registra questi limiti: si sciolgono con la prima generazione prevista e autorizzata dal piano e con la pubblicazione confermata al passo 8, non con prove a pagamento o modifiche esterne non richieste.

Non usare indirizzi API alternativi con chiavi reali: gli strumenti accettano soltanto le API ufficiali in HTTPS. Le opzioni per server diversi sono riservate a test locali con `--modalita-test`, credenziali fittizie e indirizzi HTTP `127.0.0.1` o `[::1]`; non leggono `segreti.env`. I reindirizzamenti HTTP delle API sono rifiutati.

Il controllo dei permessi deve riuscire anche su Windows: l'esistenza del file non basta. Se non è possibile verificare o restringere chi può leggerlo, l'ambiente non è pronto; chiedi assistenza a chi gestisce il computer, senza disattivare il controllo.

## 6. UI UX Pro Max (facoltativa)

UI UX Pro Max (https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) è una skill che aiuta a scegliere stile, colori, caratteri e impaginazione. Controlla se è disponibile fra le skill della sessione o nella cartella delle skill dell'utente (`~/.claude/skills/`). Se c'è, usala per la parte grafica e la prova di stile. Se non c'è, prosegui senza: non installarla da solo e scrivi in `piano.md` «UI UX Pro Max: non installata».
