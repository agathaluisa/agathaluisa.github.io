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
    let arrNumbers = []
  
    for(let count = 1; count <= 20; count++){
       if(count % 2 == 0){
       arrNumbers.push(count)
       } 
     }
     return arrNumbers
   }
  console.log(evensToTwenty())
  
  
  // IMPARES DE 1 A 20
  function oddsToTwenty() {
    let arrNumbers = []
  
    for(let count = 1; count <= 20; count++){
       if(count % 2 == 1){
       arrNumbers.push(count)
       } 
     }
     return arrNumbers
   }
  console.log(oddsToTwenty())
  
  
  // MULTIPLOS DE 5
  function multiplesOfFive() { 
    let arrNumbers = []
  
    for(let count = 5; count <= 100; count+=5){
       arrNumbers.push(count)
     }
     return arrNumbers
   }
  console.log(multiplesOfFive())
  
  
  // QUADRADOS PERFEITOS
  function squareNumbers() { 
    let arrNumbers = []
  
    for(let count = 1; count <= 10; count++){
       arrNumbers.push(count*count)
     }
     return arrNumbers
   }
  console.log(squareNumbers())
  
  
  // CONTAGEM DE 20 A 1
  function countingBackwards() {
     let arrNumbers = []
  
     for(let count = 20; count >= 1; count--){
       arrNumbers.push(count)
     } 
     return arrNumbers
  }
  console.log(countingBackwards())
  
  
  // IMPARES DE TRÁS PRA FRENTE
  function oddNumbersBackwards() {
    let arrNumbers = []
  
    for(let count = 20; count >= 1; count--){
       if(count % 2 == 1){
       arrNumbers.push(count)
       } 
     }
     return arrNumbers
   }
  console.log(oddNumbersBackwards())
  
  
  // MULTIPLOS DE 5 DE TRÁS PARA FRENTE
  function multiplesOfFiveBackwards() { 
    let arrNumbers = [] 
  
    for(let count = 100; count >= 5; count-=5){
       arrNumbers.push(count)
     }
     return arrNumbers
   }
  console.log(multiplesOfFiveBackwards())
  
  
  // QUADRADOS PERFEITOS DE TRÁS PRA FRENTE
  function squareNumbersBackwards() {
    let arrNumbers = []
    for(let count = 10; count >= 1; count--){
       arrNumbers.push(count*count)
     }
     return arrNumbers
   }
  console.log(squareNumbersBackwards())
  