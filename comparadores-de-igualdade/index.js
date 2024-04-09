// === compara valor e tipo
console.log('1' === 1)

// == Compara valor
console.log('1' == 1)

// Object.is é igual usar === porém com tratamento especial para NaN, -0, +0
console.log(NaN === NaN)
console.log(NaN == NaN)
console.log(Object.is(NaN, NaN))