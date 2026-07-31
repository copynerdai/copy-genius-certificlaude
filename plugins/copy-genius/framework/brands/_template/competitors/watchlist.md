---
brand: <brand-slug>
tipo: watchlist-competitor
aggiornata: <YYYY-MM-DD>
---

# Watchlist monitoraggio — <Brand>

> Quali brand osservati dell'archivio `monitoraggio/` servono a questo brand, e **per cosa**. La watchlist è una **vista**, non un archivio: i dati stanno una volta sola nella cartella del brand osservato, e più clienti possono seguire lo stesso competitor senza duplicarlo.
>
> La riempie la skill [ad-scraping](../../../skills/ad-scraping.md): quando la lanci su questo brand cliente, legge questa tabella per sapere quali osservati aggiornare.

| Osservato | Perché lo seguiamo | Archivio | Ultimo report |
|---|---|---|---|
| **<Nome>** | *Cosa ci serve di preciso: struttura di funnel? formato? gestione di un'obiezione? Sii specifico — "è un competitor" non basta a giustificare il monitoraggio.* Nota anche cosa NON si trasferisce (mercato diverso, lingua diversa, claim non replicabili). | `monitoraggio/<slug>/config.json` · `ledger.json` | `monitoraggio/<slug>/report/<week>.md` |

## Regola d'uso

Da qui si prendono **meccanismi** (come è costruito un beat, dove sta la CTA, come si gestisce un'obiezione), **mai frasi**. Stesso firewall dello swipe: la struttura attraversa le lingue, il fraseggio no. Un'ad tradotta si sente lontano un chilometro.

Se il brand ha una regola di voce che restringe ulteriormente, quella vince: vedi [brand-copy-rules](../brand-copy-rules.md).

## Related

- [funnel-briefs](../funnel-briefs/README.md) — il funnel che questo monitoraggio serve
- [competitor](competitor.md) — la scheda qualitativa del competitor (posizionamento, offerta), complementare a questa vista sulle ads
