// -------------------- ESERCIZIO 1 Palidroma ----------------------------------
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Inserimento parola dall'utente con validizazzione numerica e piena
do {
  var parola = prompt('Inserisci una parola');
  parola = parola.trim();
  parola = parola.toUpperCase();
} while (!(isNaN(parola)) || parola == '');
var risultatoPalindroma = document.getElementById('risultatoPalindroma');

// Funziona che inverte la parola
function inverti(x) {
  var parolaInvertita = '';
  for (var i = (x.length - 1); i >= 0; i--) {
    parolaInvertita += x[i];
  }
  return parolaInvertita;
}
var parolaInvertita = inverti(parola);

// Condizione se la parola é palindroma
if (parola == parolaInvertita) {
  risultatoPalindroma.innerHTML = 'La parola é palindroma';
  risultatoPalindroma.style.color = "green";
} else {
  risultatoPalindroma.innerHTML = 'La parola non é palindroma';
  risultatoPalindroma.style.color = "red";
}

// ------------------- ESERCIZIO 2 Pari e Dispari ------------------------------
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Inserimento pari o dispari dall'utente con validazzione
do {
  var pariDispariUtente = prompt('Inseriesci pari o dispari');
  pariDispariUtente = pariDispariUtente.toUpperCase();
} while (pariDispariUtente != 'PARI' && pariDispariUtente != 'DISPARI');

// Inserimento numero da 1 a 5 dall'utente con validazzione
do {
  var numeroUtente = parseInt(prompt('Inseriesci numero da 1 a 5'));
} while (numeroUtente < 1 || numeroUtente > 5 || isNaN(numeroUtente));

// Generazione numero random computer
function numeroRandom() {
  var x = Math.floor(Math.random() * 5 + 1);
  return x;
}
var numeroComputer = parseInt(numeroRandom());

// Somma numero utente e numero computer
var somma = numeroUtente + numeroComputer;

// Condizione somma é pari o dispari
function pariDispari(x) {
  if (x % 2 == 0) {
    risultato = 'PARI';
  } else {
    risultato = 'DISPARI';
  }
  return risultato;
}
var risultato = pariDispari(somma);

// Stabiliamo chi ha vinto
var risultatoPariODispari = document.getElementById('risultatoPariODispari');
if (risultato == pariDispariUtente) {
  risultatoPariODispari.innerHTML = 'Hai vinto! la somma é '+ somma;
  risultatoPariODispari.style.color = "green";
} else {
  risultatoPariODispari.innerHTML = 'Ha vinto il pc! la somma é '+ somma;
  risultatoPariODispari.style.color = "red";
}
