//chiedo nome, città di partenza e città di destinazione
const nomePasseg = prompt('Inserisci il nome del viaggiatore');
const cognomePasseg = prompt('Inserisci il cognome del viaggiatore');
const cittaPartenza = prompt('Da quale città vuoi partire?');
const cittaDestinazione = prompt('Qual è la città di destinazione?');

// chiedo numero km da percorrere
const numeroKm = Math.round(prompt('Quanti km vuoi percorrere?'));

// chiedo anno di nascita e converto risultato in numero intero
let userAge = prompt('Inserisci il tuo anno di nascita');
userAge = parseInt(userAge);

// ricavo l'anno corrente da sottrarre all'anno di nascita dell'utente per calcolare l'età
const today = new Date();
const dataTicket = today.getDay() + "/" + today.getMonth() + "/" + today.getFullYear();
console.log(dataTicket);

const year = today.getFullYear();
userAge = year - userAge;

// assegno alla variabile kmPrice il prezzo del biglietto moltiplicando il ocsto base per il numero di km che l'utente vuole percorrere
var kmPrice = parseInt(numeroKm) * 0.21

// costrutto per elaborare ogni numero alla seconda cifra decimale
const format = (num, decimals) => num.toLocaleString('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
 });

 // stampo la data di oggi sul biglietto
 document.getElementById('data01').innerHTML = dataTicket;
 document.getElementById('data02').innerHTML = dataTicket;

 // verifico l'età per valutare l'accesso alle scontistiche
if(userAge < 18) {
    let underagePrice = format(kmPrice / 1.20);
    let under18 = document.getElementById("sconto");
    under18.classList.add("under18");
    document.getElementById('prezzo_scontato').innerHTML = `€ ${underagePrice}`;
    document.getElementById('prezzo_intero').innerHTML = `<s>Anziché €${kmPrice}</s>`;
} else if(userAge >= 65) {
    let over65Price = format(kmPrice / 1.40);
    let over65 = document.getElementById("sconto");
    over65.classList.add("over65");
    document.getElementById('prezzo_scontato').innerHTML = '€' + over65Price;
    document.getElementById('prezzo_intero').innerHTML = `<s>Anziché €${kmPrice}</s>`;
} else {
    document.getElementById('prezzo_intero').innerHTML = '€' + kmPrice;
}

// recupero gli elementi html e ci inserisco i dati
document.getElementById('nome_pass01').innerHTML = nomePasseg + ' ' + cognomePasseg;
document.getElementById('nome_pass02').innerHTML = nomePasseg + ' ' + cognomePasseg;
document.getElementById('part01').innerHTML = cittaPartenza;
document.getElementById('part02').innerHTML = cittaPartenza;
document.getElementById('dest01').innerHTML = cittaDestinazione;
document.getElementById('dest02').innerHTML = cittaDestinazione;

