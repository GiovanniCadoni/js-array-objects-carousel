## Esercizio

Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione

Creare un carosello come nella foto allegata.

**Milestone 0:**
Partite riprendendo il markup fatto nello slider precedente. Inserite HTML statico nella pagina, modificatelo in modo da inserire il titolo e testi, e verificate che si presenti correttamente.

**Milestone 1:**
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

**Milestone 2:**
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

**Procedimento:**
1. Integrare al nostro esercizio il nostro array con le diverse informazioni:
- link dell'immagine
- nome del gioco
- breve descrizione del gioco
2. Andare a modificare all'interno del ciclo, che si occupa di riempire il nostro html, i vari richiami alle variabili, in modo che ora si riferisca alle variabili contenute negli oggetti del nostro nuovo array.