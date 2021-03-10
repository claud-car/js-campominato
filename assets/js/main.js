//variabili
var numeromax = [];
var numeripc = [];
var numeriutente = []
var numeriRichiesti;


selezioneDifficolta = true;
while (selezioneDifficolta) {
  var difficolta = prompt("Scegli un livello di difficoltà : facile , medio , difficile");

  selezioneDifficolta = false;
  switch (difficolta) {
    case "facile":
      var numeromax = 100;
      break;
    case "medio":
      var numeromax = 80;
      break;
    case "difficile":
      var numeromax = 50;
      break;
    default:
      selezioneDifficolta = true;
      console.log("Mi devi selezionare una difficoltà da facile medio o difficile");
      break;
  }
}

//ciclo per generare 16 numeri pc
while (numeripc.length < 16) {
  var numero = generator(numeromax);
  if (!numeripc.includes(numero)){
    numeripc.push(numero);
  }
}

//l'utente deve scegliere dei numeri per non sbagliare
while (numeriutente.length < numeromax - 16 && !numeripc.includes(numeriRichiesti)){
  numeriRichiesti = parseInt(prompt("Dammi un numero da 1 a 100 e prova a battere il computer"));
  if (numeripc.includes(numeriRichiesti)) {
  } else if (isNaN(numeriRichiesti)){
    console.log("Dammi un numero");
  } else if (numeriRichiesti > 100 || numeriRichiesti < 1){
    console.log("dammi un numero da 1 a 100");
  } else{
    numeriutente.push(numeriRichiesti);
  }
}

//alla fine del gioco invio il punteggio in log
var punteggio = numeriutente.length;
console.log("Numeri pc : " + numeripc);
console.log("Numeri utente indovinati: " + numeriutente);
console.log("GAME OVER");
console.log("Il tuo punteggio è : " + punteggio);
