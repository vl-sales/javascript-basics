let estouNoEscopoGlobal = 1

function somaAoNumeroGlobal(num) {
  let estouNoEscopoDaFuncao;
  if (true) {
    let estouNoEscopoDeBloco = 2
    estouNoEscopoDaFuncao = 1
    console.log(estouNoEscopoDeBloco)
  }

  // Acessando variável no escopo global
  estouNoEscopoGlobal += num
  // console.log(estouNoEscopoDeBloco) //ReferenceError: estouNoEscopoDeBloco is not defined
  console.log(estouNoEscopoGlobal)
  console.log(estouNoEscopoDaFuncao)
}

somaAoNumeroGlobal(2)

// console.log(estouNoEscopoDaFuncao) //ReferenceError: estouNoEscopoDaFuncao is not defined
// console.log(estouNoEscopoDeBloco) //ReferenceError: estouNoEscopoDeBloco is not defined
console.log(estouNoEscopoGlobal)