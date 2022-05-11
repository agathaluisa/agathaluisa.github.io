/*Crie uma função que recebe um array como parâmetro 
e retorna quantos números negativos tem nesse mesmo array.*/

function contaNegativos(arr){
    let count = 0
    for(let i = 0; i < arr.length; i++){
      if(arr[i] < 0){
        count++
      }
    } if(count === 0){
      return "Não há negativos neste array"
    } else {
      return `Neste array há ${count} número(s) negativo(s)`
    }
} 
console.log(contaNegativos([-1, 2, -3, 4, -5, 567]))


/*Crie uma função que recebe uma uma string como parâmetro, 
e retorna um array contendo todas as palavras dessa frase que possuem um comprimento 
ímpar, ou seja, que possuem uma quantidade ímpar de letras.*/

function retornaImpares (string){
    let novoArray = []
    let array = string.split(" ")
    for(let i = 0; i < array.length; i++){
      if(array[i].split("").length % 2 !== 0){
        novoArray.push(array[i])
      }
    } 
    return novoArray
} 
console.log(retornaImpares("Eu gosto muito de você leãozinho"))


/*Crie uma função que recebe um array como parâmetro 
e retorna a soma todos os numeros negativos contidos nesse array.*/

function somaNegativos (arr){
    let soma = 0
    for(let i = 0; i < arr.length; i++){
      if(arr[i] < 0){
        soma+= arr[i]
      }
    }
    return `O resultado é ${soma}`
} 
console.log(somaNegativos([-1,-2,-3,-4]))


/*Crie uma função que recebe um número como parâmetro e retorne 
um arraycontendo todos os números pares existentes entre 0 e 
o número passado no parâmetro.*/

function retornaArray (num){
    let array = []
    for(let i = 0; i < num; i++){
      if(i % 2 === 0){
        array.push(i)
      }
    } 
    return array
} 
console.log(retornaArray(10))


/*Crie uma função que recebe um array como parâmetro e 
retorne outro array contendo apenas os valores negativos do array 
passado por parâmetro.*/

function arrayNegativo (arr){
    let result = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i] < 0){
        result.push(arr[i])
      }
    } 
    return result
  } 
  console.log(arrayNegativo([-1, 1, -2, 2, -3, 3]))


/*Crie uma funçao que recebe um array como parâmetro e some todos os seus elementos. 
Feito isso, sua função deve retornar true se essa soma for maior que a quantidade 
de elementos no array. Caso contrário, deve retornar false.*/

function somaArray (arr){
    let soma = 0
    for(let i = 0; i < arr.length; i++){
      soma += arr[i]
    } if (soma > arr.length){
      return "true"
    } else {
      return "false"
    }
} 
console.log(somaArray([0,1,1,0,1]))


/*Crie uma funçao que recebe um array como parâmetro e retorne outro array, 
onde cada elemento desse novo array é igual ao elemento do array do parâmetro mais 5.*/

function maisCinco (arr){
    let novoArr = []
    for(let i = 0; i < arr.length; i++){
      novoArr.push(arr[i]+5)
    } return novoArr
} 
console.log(maisCinco([2,1,16,14,18]))


/*Crie uma função que recebe um array como parâmetro e calcule a média dos 
valores contidos nesse array. Depois disso, crie outro array e inclua nele 
apenas os elementos do array do parâmetro que sejam maiores que a média calculada.*/

function calculaMedia (arr){
    let newArr = []
    let soma = 0
    for(let i = 0; i < arr.length; i++){
      soma+= arr[i]
    } 
    let media = soma / arr.length
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > media){
        newArr.push(arr[i])
      }
    }
    return newArr
} 
console.log(calculaMedia([1,2,3,4,5]))


/*Crie uma função que recebe uma string como parâmetro, e 
retorna a quantidade de letras ‘a’ que existem nessa string.*/

function quantiaLetrasA(str){
    let letrasA = 0
    for(let i = 0; i < str.length; i++){
      if(str[i] === "a" || str[i] === "A"){
        letrasA++
      }
    } 
    return letrasA
} 
console.log(quantiaLetrasA("A minha mae sabe tricotar"))


/*Crie uma função que recebe um array contendo somente strings, e retorna 
a soma do comprimento de todas as strings deste array.*/

function somaArray(arr){
    let soma = 0
    for(let i = 0; i < arr.length; i++){
      soma+= arr[i].length
    } 
    return soma
} 
console.log(somaArray(["casa", "papo", "cor", "ora"]))


/*Crie uma função que recebe uma string como parâmetro, e retorna uma string 
igual à que foi passada por parâmetro, mas com ‘0’ (zeros) no lugar das letras ‘o’.*/

function mudaLetraO(str){
    let finalString = ""
    for(let i = 0; i < str.length; i++){
      if(str[i] === "o" || str[i] === "O"){
        finalString += "0"
      } else {
        finalString += str[i]
      }
    } 
    return finalString
} 
console.log(mudaLetraO("Oi, meu nome é Osmar"))


/*Crie uma função que recebe uma string como parâmetro e retorna uma string 
igual à que foi passada por parâmetro, mas com todos os ‘p’ (minúsculos) 
trocados por ‘P’ (maiúsculos).*/

function mudaLetraP(str){
    let finalString = ""
    for(let i = 0; i < str.length; i++){
      if(str[i] === "p"){
        finalString += "P"
      } else {
        finalString += str[i]
      }
    } 
    return finalString
} 
console.log(mudaLetraP("o peito do pé do pedro é preto"))
