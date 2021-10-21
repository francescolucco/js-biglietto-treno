// calcolo del prezzo del biglietto del treno

/**
 * 1. chiedere all'utente di inserire il numero di kilometri che vuole percorrere e l'età
 * 2. calcolare il prezzo intero del biglietto
 * 3. applicare eventuale sconto
 * 4. output
 */

 const firstName = prompt('Ciao! Ora ti aiuteremo a calcolare il prezzo del tuo biglietto. Per cominciare ti chiediamo di inserire il tuo nome:');

 const age = parseInt(prompt('Quanti anni hai?'));

 const kmTraveled = parseInt(prompt('La tua meta a quanti kilometri di distanza si trova?'));

 const priceKm = 0.21;

 const tiketPrice = (kmTraveled * priceKm).toFixed(2);
 console.log(tiketPrice)

 const codeDiscountClient = prompt('Inserisci il tuo codice di sconto')

 const codeDiscount = 'SCONTO20'

 let datoValido = true;
 let errorMsg1 = ''
 let errorMsg2 = ''
 let errorMsg3 = ''
 let finalPrice = ''

 if(age < 20 || age == 20){
  finalPrice = ((tiketPrice * 80) / 100).toFixed(2);
 }else if(age > 65 || age == 65){
  finalPrice = ((tiketPrice * 60) / 100).toFixed(2)
 }else{
  finalPrice = tiketPrice
 }

 console.log(finalPrice)
 
 console.log(errorMsg1)
 console.log(errorMsg2)
 console.log(errorMsg3)

// controllo se l'età è un numero
if(isNaN(age)){
 datoValido = false;
 errorMsg1 = 'Inserire un numero valido';
}

// controllo se il kilometraggio è un numero
if(isNaN(kmTraveled)){
  datoValido = false;
  errorMsg2 = 'Inserire un numero valido';
}

// controllo codice di sconto
if(codeDiscount != 'SCONTO20'){
  errorMsg3 = 'Codice non valido';
}










