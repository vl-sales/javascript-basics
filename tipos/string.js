// Strings
const stringSimpleQuote = 'Isso é uma string'
const stringDobleQuotes = "Isso também é um string"
const stringConstructor  = String('Outra string aqui')

// Outra forma de ter uma string é com crase. A diferença é que ela permite interpolação
const endString = 'outra string'
const stringWithCrasis = `Isso é ${endString}`
console.log(stringWithCrasis)

// operações simples

// Outro tipo de interpolação
const hello = 'Hello'
const world = 'World'

let helloWorld = hello + ' ' + world
console.log(helloWorld)

// Remove espaços em branco no inicio e fim da string
const helloWorldWithWhiteSpace = '   Hello World    '
console.log(helloWorldWithWhiteSpace)
const removingSpaces = helloWorldWithWhiteSpace.trim()
console.log(removingSpaces)

// Minusculas
helloWorld = 'HELLO WORLD'
console.log(helloWorld.toLowerCase())

// Maiusculas
helloWorld = 'hello world'
console.log(helloWorld.toUpperCase())

// Podemos pegar  uma posição da string
const h = helloWorld[0]

// é possível fazer um slice e pegar mais de um caractere
const helloW = helloWorld.slice(0, 7)
console.log(helloW)

// Transformar string em array a partir de um delimitador
let helloWorldArray = helloWorld.split('')
console.log(helloWorldArray)
