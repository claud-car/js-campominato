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
console.log(numeriutente);

var punteggio = numeriutente.length;
console.log("Hai perso. Il tuo punteggio è : " + punteggio);








//funzione per generare numeri da 1 a 100
function generator(numeromax){
  return Math.floor(Math.random() * numeromax) + 1;
}
