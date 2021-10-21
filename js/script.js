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

 const codeDiscountClient = prompt('Inserisci il tuo codice di sconto')

 let prezzoUlteriormenteScontato = ''

 let dettagliPrezzo = ''

 let datoValido = true;
 let errorMsg1 = '';
 let errorMsg2 = '';
 let errorMsg3 = '';
 let errorMsg4 = '';
 let finalPrice = '';

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
 if(codeDiscountClient != 'SCONTO20'){
   errorMsg3 = 'Codice non valido';
 }

 if (datoValido == true) {
  if((age < 18) && (codeDiscountClient !== 'SCONTO20')){
    finalPrice = ((tiketPrice * 80) / 100).toFixed(2);
    document.getElementById('fl_print-dates').innerHTML = 
`PREZZO SCONTATO del 20%: promozione valida per tutti i passeggeri minorenni non in possesso di codice di sconto
`
;
  }else if(age > 65){
    finalPrice = ((tiketPrice * 60) / 100).toFixed(2);
    document.getElementById('fl_print-dates').innerHTML = 
`PREZZO SCONTATO del 40%: promozione valida per tutti i passeggeri over 65
`
;
  }else{
    finalPrice = tiketPrice;
    document.getElementById('fl_print-dates').innerHTML = 
`PREZZO INTERO: dato dalla distanza della tratta moltiplicata per il costo di ogni singolo km, ossia di 0,21 &euro;
`
;
  }
  console.log(tiketPrice);
  console.log(finalPrice);
 } else {
   errorMsg4 = 'I dati inseriti non sono validi. Ti chiediamo di ricare la pagina e di inserirli nuovamente.';
   ;
 }

console.log(errorMsg1)
console.log(errorMsg2)
console.log(errorMsg3)
console.log(errorMsg4)

if (datoValido == true) {
  if((age < 18) && (codeDiscountClient == 'SCONTO20')) {
    prezzoUlteriormenteScontato = ((finalPrice * 60) / 100).toFixed(2);
    document.getElementById('fl_print-dates').innerHTML = 
`PREZZO SCONTATO del 40%: promozione valida per tutti i passeggeri minorenni e in possesso di codice sconto.
`
;
  }else if((18<= age <=20) && (codeDiscountClient == 'SCONTO20')) {
    prezzoUlteriormenteScontato = ((finalPrice * 80) / 100).toFixed(2);
    document.getElementById('fl_print-dates').innerHTML = 
    `PREZZO SCONTATO del 20%: promozione valida per tutti i passeggeri under20 in possesso di codice sconto.
    `
    ;
  }else{
    prezzoUlteriormenteScontato = finalPrice;
  }
  console.log(prezzoUlteriormenteScontato);
 }

document.getElementById('fl_total-cost2').innerHTML = 
`<span id="fl_total-cost">${firstName}</span> , <br>
il costo del tuo biglietto è di:
<br>
<span id="fl_total-cost">${prezzoUlteriormenteScontato} &euro;</span> 
`
;





// document.getElementById('fl_print-dates').innerHTML = 
// `PREZZO INTERO: dato dalla distanza della tratta moltiplicata per il costo di ogni singolo km, ossia di 0,21 &euro;
// `
// ;

// document.getElementById('fl_print-dates').innerHTML = 
// `PREZZO SCONTATO del 20%: promozione valida per tutti i passeggeri minorenni
// `
// ;

// document.getElementById('fl_print-dates').innerHTML = 
// `PREZZO SCONTATO del 40%: promozione valida per tutti i passeggeri over 65
// `
// ;

// document.getElementById('fl_print-dates').innerHTML = 
// `PREZZO SCONTATO del 40%: promozione valida per tutti i passeggeri minorenni in possesso di codice sconto.
// `
// ;

// document.getElementById('fl_print-dates').innerHTML = 
// `PREZZO SCONTATO del 20%: promozione valida per tutti i passeggeri under20 in possesso di codice sconto.
// `
// ;



