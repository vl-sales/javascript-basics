// O objeto Set permite que você armazene valores únicos de qualquer tipo, desde valores primitivos a referências a objetos.
const arrayComValoresRepetidos = [1, 1, 2, 3, 4, 2, 4, 5, 6, 1]
const set = new Set(arrayComValoresRepetidos)
console.log(set)

for (const num of set) {
  console.log(num)
}