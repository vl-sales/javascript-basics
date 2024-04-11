// Atribuição
let x = 5 // atribuição
let y = 10

x += y // atribuição de adição
x -= y // atribuição de subtração
x *= y // atribuição de multiplicação
x /= y // atribuição de divisão
x %= y // atribuição do resto
x **= y // atribuição exponencial
x &= y

x = 5
y = 10
// comparação
console.log(x === y)
console.log(x == y)
console.log(x !== y)

// operadores aritméticos
console.log(y / x) // divisão
console.log(y - x) // subtração
console.log(x * y) // multiplicação
console.log(x + y) // adição
console.log(x ** 2) // exponencial

// Operadores lógicos
console.log(true && false)
console.log(true && true)
console.log(true || false)
console.log(false || false)
console.log(!true)
console.log(!false)

// operadores de string
let hello = 'Hello '
const world = 'World'

console.log(hello + world)

hello += world
console.log(hello)

// operador condicional
console.log(x > y ? x : y) // se x > y retorne x, se não retorne y

// Operadores unários
console.log(+3)
console.log(-3)
console.log(+true)
console.log(+false)

// delete
const obj = {
  nome: 'Vinicius',
  sobrenome: 'Lande',
  idade: '24'
}

delete obj.idade
console.log(obj)

const arvores = new Array(
  "pau-brasil",
  "loureiro",
  "cedro",
  "carvalho",
  "sicômoro",
);
delete arvores[3]
console.log(arvores)

// typeof
console.log(typeof x)
console.log(typeof hello)

// void
let voidExample;
function atribuiValorNaVariavelGlobal(n) {
  voidExample = n
  return n
}

void(atribuiValorNaVariavelGlobal(3)) // Void avalida o que estiver dentro dos parênteses e retorna undefined
console.log(voidExample)

// in
console.log('nome' in obj)

// instanceof
console.log(new String('Hello World') instanceof String)
console.log('Hello World' instanceof String)
console.log([] instanceof Array)

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_aritmeticos