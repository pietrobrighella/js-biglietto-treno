const numeroKm = Math.round(prompt('Quanti km vuoi percorrere?'));
let userAge = prompt('Inserisci il tuo anno di nascita');
userAge = parseInt(userAge);

const today = new Date();
const year = today.getFullYear();
userAge = year - userAge;

var kmPrice = parseInt(numeroKm) * 0.21

const format = (num, decimals) => num.toLocaleString('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
 });

if(userAge < 18) {
    var underagePrice = format(kmPrice / 1.20);
    console.log('Prezzo scontato minori: ' + underagePrice)
} else if(userAge > 65) {
    var over65Price = format(kmPrice / 1.40);
    console.log('Prezzo scontato over65: ' + over65Price)
}