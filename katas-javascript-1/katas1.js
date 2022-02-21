// CONTAGEM DE 1 A 20
function oneThroughTwenty() {
  let arrNumbers = []

  for(let count = 1; count <= 20; count++){
    arrNumbers.push(count)
  }

  return arrNumbers
}
console.log(oneThroughTwenty())


// PARES DE 1 A 20
function evensToTwenty() {
  for(let count = 1; count <= 20; count++){
     if(count % 2 == 0){
     console.log(count)
     } 
   }
 }
console.log(evensToTwenty())


// IMPARES DE 1 A 20
function oddsToTwenty() {
  for(let count = 1; count <= 20; count++){
     if(count % 2 == 1){
     console.log(count)
     } 
   }
 }
console.log(oddsToTwenty())


// MULTIPLOS DE 5
function multiplesOfFive() { 
  for(let count = 5; count <= 100; count+=5){
     console.log(count)
   }
 }
console.log(multiplesOfFive())


// QUADRADOS PERFEITOS
function squareNumbers() { 
  for(let count = 1; count <= 10; count++){
     console.log(count*count)
   }
 }
console.log(squareNumbers())


// CONTAGEM DE 20 A 1
function countingBackwards() {
   for(let count = 20; count >= 1; count--){
     console.log(count)
   } 
}
console.log(countingBackwards())


// IMPARES DE TRÁS PRA FRENTE
function oddNumbersBackwards() {
  for(let count = 20; count >= 1; count--){
     if(count % 2 == 1){
     console.log(count)
     } 
   }
 }
console.log(oddNumbersBackwards())


// MULTIPLOS DE 5 DE TRÁS PARA FRENTE
function multiplesOfFiveBackwards() {  
  for(let count = 100; count >= 5; count-=5){
     console.log(count)
   }
 }
console.log(multiplesOfFiveBackwards())


// QUADRADOS PERFEITOS DE TRÁS PRA FRENTE
function squareNumbersBackwards() {
  for(let count = 10; count >= 1; count--){
     console.log(count*count)
   }
 }
console.log(squareNumbersBackwards())
