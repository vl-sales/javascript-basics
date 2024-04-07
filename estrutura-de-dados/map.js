// Map contém pares de chave-valor
const keys = ['a', 'b', 'c', 'd']
const values = ['valor 1', 'valor 2', 'valor 3', 'valor 4']

const map = new Map()
for (const [i, key] of keys.entries()) {
  map.set(key, values[i])
}

console.log(`Valor para a chave a: ${map.get('a')}`)
console.log(`Valor para a chave b: ${map.get('b')}`)
console.log(`Valor para a chave c: ${map.get('c')}`)
console.log(`Valor para a chave d: ${map.get('d')}`)