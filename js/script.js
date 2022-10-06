// chiedo numero km da percorrere
const numeroKm = Math.round(prompt('Quanti km vuoi percorrere?'));

// chiedo anno di nascita e converto risultato in numero intero
let userAge = prompt('Inserisci il tuo anno di nascita');
userAge = parseInt(userAge);

// ricavo l'anno corrente da sottrarre all'anno di nascita dell'utente per calcolare l'età
const today = new Date();
const year = today.getFullYear();
userAge = year - userAge;

// assegno alla variabile kmPrice il prezzo del biglietto moltiplicando il ocsto base per il numero di km che l'utente vuole percorrere
var kmPrice = parseInt(numeroKm) * 0.21

// costrutto per elaborare ogni numero alla seconda cifra decimale
const format = (num, decimals) => num.toLocaleString('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
 });

 // verifico l'età per valutare l'accesso alle scontistiche
if(userAge < 18) {
    var underagePrice = format(kmPrice / 1.20);
    console.log('Prezzo scontato minori: ' + underagePrice)
} else if(userAge > 65) {
    var over65Price = format(kmPrice / 1.40);
    console.log('Prezzo scontato over65: ' + over65Price)
}