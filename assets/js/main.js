//variabili
var numeromax = 100;
var numeripc = [];


//funzione per generare numeri da 1 a 100
function generator(numeromax){
  return Math.floor(Math.random() * numeromax) + 1;
}

//ciclo per generare 16 numeri pc

// while (numeripc.length < 16) {
//   numeripc.push(generator(numeromax))
// }


while (numeripc.lenght < 16) {
  var numero = generator(numeromax)
  if (!numeripc.includes(numero)){
    numeripc.push(numero);
  }
}

console.log(numeripc);
