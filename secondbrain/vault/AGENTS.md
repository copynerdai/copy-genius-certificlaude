# SecondBrain — schema e regista

Questo è il SecondBrain della persona con cui lavori: l'unica fonte di verità del suo lavoro e della sua vita professionale.
Tu sei il suo assistente e lavori dentro questa cartella.
Questo è il primo file che leggi: qui c'è la mappa, e qui ci sono le regole.
Parla con la persona in italiano.

## Il metodo

Il SecondBrain segue il metodo che Andrej Karpathy ha descritto in [raw/karpathy-llm-knowledge-bases.md](raw/karpathy-llm-knowledge-bases.md).
Il ciclo ha quattro movimenti, sempre gli stessi.

1. **Ingest.** Le fonti grezze (articoli, trascrizioni, PDF, appunti, materiali di un cliente) entrano in `raw/` così come sono, e ognuna si elenca in [raw/index.md](raw/index.md) con una riga di descrizione.
2. **Compila.** Dalle fonti ricavi note ordinate nell'area giusta: una nota per argomento, con un riassunto in testa, il link alla fonte in `raw/` e i link alle note collegate. Una fonte alla volta, controllando con la persona dove va finché lo schema non è chiaro.
3. **Interroga.** Per rispondere a una domanda parti dalla mappa qui sotto, apri l'`index.md` dell'area e segui i link. Rispondi dicendo quali note hai usato. Quando la risposta ha valore, salvala come nota e linkala: così ogni domanda arricchisce il SecondBrain.
4. **Cura.** Quando la persona dice «ripassa la wiki» o simili, di solito una volta al mese, cerca dati incoerenti o superati, note che nessun index linka, link rotti, doppioni e collegamenti nuovi da aggiungere. Prima riporta cosa hai trovato, poi correggi solo ciò che la persona approva.

A scrivere e a ordinare sei tu: la persona tocca le note a mano molto di rado.
La persona decide cosa conta e dove va. Tu fai il lavoro di scrittura e di ordine.

## Mappa

| Area | Index | Cosa contiene |
|---|---|---|
| Marketing | [marketing/index.md](marketing/index.md) | Strategie, ricerche, materiali e procedure di marketing |
| Fiscalità | [fiscalita/index.md](fiscalita/index.md) | Società, fatture, tasse, scadenze e contatti dei professionisti |
| Finance | [finance/index.md](finance/index.md) | Investimenti personali, conti e budget |
| Personal | [personal/index.md](personal/index.md) | Dati personali, salute, viaggi, impegni e cose da fare |
| System | [system/index.md](system/index.md) | Strumenti, skill installate, impostazioni dell'AI e del computer |
| raw | [raw/index.md](raw/index.md) | Le fonti grezze, così come sono arrivate |

Quando nasce un'area nuova, aggiungila a questa tabella.

## Come scegli dove va una cosa

- Per ogni richiesta o materiale, scegli l'area dalla mappa.
- Se l'area non è chiara, proponi tu la più adatta e chiedi conferma.
- Se nessuna area va bene, proponi un'area nuova: cartella, `index.md` e riga nella mappa.
- Dentro un'area, quando un argomento ha più note, raccoglile in una sottocartella con il suo `index.md`, linkato dall'index dell'area.
- Un'area grande può avere un suo `AGENTS.md`, che fa da responsabile di reparto con le regole di quell'area. Se lo trovi, leggilo prima di lavorare lì. Proponilo quando un'area cresce o ha un suo processo ricorrente.

## Convenzioni dei file

- Tutto è in Markdown (`.md`), salvato in UTF-8 senza BOM.
- Nomi di file e cartelle in minuscolo, con i trattini e senza accenti: `call-cliente-rossi.md`.
- Date in formato AAAA-MM-GG, anche nei nomi: `2026-10-15-call-cliente-rossi.md`.
- Link markdown relativi, cliccabili in Obsidian: `[testo](cartella/nota.md)`. Niente `[[wikilink]]`, così c'è un solo stile in tutto il SecondBrain.
- Ogni cartella ha il suo `index.md`. Si apre con il titolo, poi una riga di riassunto con il link per tornare a questo file, poi l'elenco dei documenti, ognuno con il link e una riga che dice cosa contiene.
- Quando aggiungi, sposti o rinomini una nota, aggiorna l'`index.md` della sua cartella e i link che puntavano a lei.
- PDF, immagini e video vanno nella sottocartella `allegati/` dell'area, con una nota `.md` che li descrive e li linka.
- Non cancellare mai niente: sposta nel Cestino o in `_archivio/`, e dillo alla persona.
- Password, chiavi e codici di accesso non si scrivono mai nelle note.

## Copy Genius

Copy Genius ha un suo vault separato, in `%USERPROFILE%\Desktop\copy-genius\`, con le sue regole.
Brand, copy, swipe e report di ad-scraping vivono lì e non si duplicano qui.
Il rimando sta in [marketing/index.md](marketing/index.md).
