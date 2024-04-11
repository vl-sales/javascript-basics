const arrowFunction = () => {
  console.log('arrowFunction foi chamada')
}

arrowFunction()

function functionDeclaration() {
  console.log('function')
}
functionDeclaration()

// valores default
const somaDoisNumeros = (n1, n2=10) => {
  console.log(n1 + n2)
}
somaDoisNumeros(5)
somaDoisNumeros(5, 20)

// rest param
function somaVariosValroes(...args) {
  let sum = 0
  for (const arg of args) {
    sum += arg
  }

  console.log(sum)
}
somaVariosValroes(5, 5, 10, 30)
