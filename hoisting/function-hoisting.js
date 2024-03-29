// Posso chamar uma função antes de ser declarada 'o'
// Isso acontece porque graças ao hoisting a declaração da função e variavel são elevadas para o topo do seu contexto de execução
logSomething('Hello World')

function logSomething(something) {
  console.log(something)
}