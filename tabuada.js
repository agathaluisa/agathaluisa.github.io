function tabuada() {
    let x = []
    for (let index = 0; index <= 10; index++) {
        x[index] = []
        for(let column = 0; column <= 10; column++){
          let multiplicacao = index*column
          x[index].push(multiplicacao)
        }
    }
return x
}        
console.table(tabuada())   