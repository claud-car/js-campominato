//variabili
var numeromax = 100;
var numeripc = [];
var numeriutente = []
var numeriRichiesti;

//ciclo per generare 16 numeri pc
while (numeripc.length < 16) {
  var numero = generator(numeromax);
  if (!numeripc.includes(numero)){
    numeripc.push(numero);
  }
}

while (numeriutente.length < numeromax - 16 && !numeripc.includes(numeriRichiesti)){
  numeriRichiesti = parseInt(prompt("Dimmi un numero"));
  if (numeripc.includes(numeriRichiesti)) {
  } else if (isNaN(numeriRichiesti)){
    console.log("Dammi un numero");
  } else if (numeriRichiesti > 100 || numeriRichiesti < 1){
    console.log("dammi un numero da 1 a 100");
  } else{
    numeriutente.push(numeriRichiesti);
  }
}

var punteggio = numeriutente.length;
console.log("Numeri pc : " + numeripc);
console.log("Numeri utente indovinati: " + numeriutente);
console.log("Hai perso. Il tuo punteggio è : " + punteggio);
