// Coerção de tipos é a conversão automatica de tipos de dados
console.log(1 + 'A') // Transforma 1 em string

console.log(10 > '11') // Transforma '11' em numero

const x = '5'
const y = +x
console.log(typeof y)

// transformarção -> o programador explicitamente transforma o tipo
const n = Number('11')
const b = Boolean('')
const set = new Set()
const array = Array.from(set)

console.log(n)
console.log(b)
console.log(array)
