// Symbol é um tipo primitivo único, e pode, basicamente, ser usado como um identificador.
/*
 O tipo de dados symbol é de propósito altamente especializado, o que o torna pouco versátil; uma instância de Symbol pode ser atribuída à um L-value, e pode ter sua identidade examinada, nada mais; nenhuma outra operação poderá ser aplicada
 https://developer.mozilla.org/pt-BR/docs/conflicting/Web/JavaScript/Reference/Global_Objects/Symbol 
*/

console.log(Symbol("foo") === Symbol("foo"))
const foo = Symbol()
const bar = Symbol()
console.log(typeof foo === "symbol")
console.log(typeof bar === "symbol")