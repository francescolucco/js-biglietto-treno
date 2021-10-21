// calcolo del prezzo del biglietto del treno

/**
 * 1. chiedere all'utente di inserire il numero di kilometri che vuole percorrere e l'età
 * 2. calcolare il prezzo intero del biglietto
 * 3. applicare eventuale sconto
 * 4. output
 */

 const firstName = prompt('Ciao! Ora ti aiuteremo a calcolare il prezzo del tuo biglietto. Per cominciare ti chiediamo di inserire il tuo nome:');

 const kmTraveled = parseInt(prompt('La tua meta a quanti kilometri di distanza si trova?'));

 const priceKm = 0.21;

 const tiketPrice = kmTraveled * priceKm;
 tiketPrice.toFixed(2); 
 console.log(tiketPrice)

 const discountUnder18 = ((tiketPrice * 80) / 100).toFixed(2)
 console.log(discountUnder18)


 const discountOver65 = ((tiketPrice * 60) / 100).toFixed(2)
 console.log(discountOver65)



//  let giocoValido = true;
//  let errorMsg = ''
 
//  // controllo la validità do pari o dispati
//  if(pariDispari !== 'pari' && pariDispari !== 'dispari'){
//    giocoValido = false;
//    errorMsg = 'Inserire pari o dispari in modo corretto';
//  }
 
//  // controllo se è stato inserito un numero
//  if(isNaN(numPlayer)){
//    giocoValido = false;
//    errorMsg = 'Inserire un numero valido';
//  }
 
//  // controllo se il nuero è > 0 e < 10
//  if(numPlayer < 0 || numPlayer > 9){
//    giocoValido = false;
//    errorMsg = 'Inserire un numero compreso fra 1 e 9';
//  }
 
//  console.log('giocoValido',giocoValido)
//  console.log('errorMsg',errorMsg)
 
//  // Math.random() estrae un valore compreso fra 0 e 1
//  // Math.floor() arrotonda per difetto
//  // Math.round() arrotonda al valore più vicino
//  // Math.ceil() arrotonda per eccesso
 
//  //estrazione con base 0 [da 0 a 9]
//  //console.log(Math.floor(Math.random() * 10));
 
//  //estrazione con base x [da x a y] -> x = 1 y = 10
//  //console.log(Math.floor(Math.random() * 10 ) + 1);
 
//  // estraiamo un numero randoma da 1 a 9
//  const numPC = Math.floor(Math.random() * 9) + 1;
 
//  console.log('Giocata del PC ',numPC);
 
//  const sommaNum = numPC + numPlayer;
//  console.log('somma delle giocate',sommaNum);
 
//  // l'operatore % (modulo) restituisce il resto dato dalla divizione di 2 valori es 5 % 2 = 1
//  // quindi per sapere se un numero è pari con % 2 deve risultare 0
 
 
//  // verifico se la soluzione è pari o dipari stabilendo che di default è pari
//  let soluzione = 'pari';
//  console.log('MODULO 2',sommaNum % 2)
//  if(sommaNum % 2){
//    soluzione = 'dispari';
//  }
 
//  console.log('soluzione',soluzione)
 
 
//  // confrontiamo la soluzione con la sceta dell'utente
//  let risultato = 'Hai perso';
//  if(pariDispari === soluzione){
//    risultato = 'Hai vinto';
//  }
 
//  let outputStr = `
//    Tu hai scelto il numero ${numPlayer}<br>
//    il PC ha scelto il numero ${numPC}.<br>
//    La somma è ${sommaNum} ed è ${soluzione}<br>
//    Siccome hai scelto ${pariDispari}:<br>
//    <strong>${risultato}</strong>
 
//  `
//  if(!giocoValido){
//    outputStr = "Errore! "+errorMsg;
//  }
 
//  document.getElementById('output').innerHTML = outputStr;





























// /**
//  * 1. chiedere all'utente di inserire "pari" o "dispari"
//  * 2. chidere all'utente un numero da 1 a 9
//  * 3. estrarre un numero da 1 a 9
//  * 4. confrontare i valori
//  *    - sommiamo i valori
//  *    - verifichiamo se la somma è pari o dispari valorizzando il dato
//  *    - confrontare il valore del dato calcolato (pari o dispari) con la scelta dell'utente
//  * 5. output
//  *
//  */

//  const pariDispari = prompt('Scegli pari o dispari');

//  const numPlayer = parseInt(prompt('Scegli un numero da 1 a 9')); 
 
//  let giocoValido = true;
//  let errorMsg = ''
 
//  // controllo la validità do pari o dispati
//  if(pariDispari !== 'pari' && pariDispari !== 'dispari'){
//    giocoValido = false;
//    errorMsg = 'Inserire pari o dispari in modo corretto';
//  }
 
//  // controllo se è stato inserito un numero
//  if(isNaN(numPlayer)){
//    giocoValido = false;
//    errorMsg = 'Inserire un numero valido';
//  }
 
//  // controllo se il nuero è > 0 e < 10
//  if(numPlayer < 0 || numPlayer > 9){
//    giocoValido = false;
//    errorMsg = 'Inserire un numero compreso fra 1 e 9';
//  }
 
//  console.log('giocoValido',giocoValido)
//  console.log('errorMsg',errorMsg)
 
//  // Math.random() estrae un valore compreso fra 0 e 1
//  // Math.floor() arrotonda per difetto
//  // Math.round() arrotonda al valore più vicino
//  // Math.ceil() arrotonda per eccesso
 
//  //estrazione con base 0 [da 0 a 9]
//  //console.log(Math.floor(Math.random() * 10));
 
//  //estrazione con base x [da x a y] -> x = 1 y = 10
//  //console.log(Math.floor(Math.random() * 10 ) + 1);
 
//  // estraiamo un numero randoma da 1 a 9
//  const numPC = Math.floor(Math.random() * 9) + 1;
 
//  console.log('Giocata del PC ',numPC);
 
//  const sommaNum = numPC + numPlayer;
//  console.log('somma delle giocate',sommaNum);
 
//  // l'operatore % (modulo) restituisce il resto dato dalla divizione di 2 valori es 5 % 2 = 1
//  // quindi per sapere se un numero è pari con % 2 deve risultare 0
 
 
//  // verifico se la soluzione è pari o dipari stabilendo che di default è pari
//  let soluzione = 'pari';
//  console.log('MODULO 2',sommaNum % 2)
//  if(sommaNum % 2){
//    soluzione = 'dispari';
//  }
 
//  console.log('soluzione',soluzione)
 
 
//  // confrontiamo la soluzione con la sceta dell'utente
//  let risultato = 'Hai perso';
//  if(pariDispari === soluzione){
//    risultato = 'Hai vinto';
//  }
 
//  let outputStr = `
//    Tu hai scelto il numero ${numPlayer}<br>
//    il PC ha scelto il numero ${numPC}.<br>
//    La somma è ${sommaNum} ed è ${soluzione}<br>
//    Siccome hai scelto ${pariDispari}:<br>
//    <strong>${risultato}</strong>
 
//  `
//  if(!giocoValido){
//    outputStr = "Errore! "+errorMsg;
//  }
 
//  document.getElementById('output').innerHTML = outputStr;
 