// var possui um escopo abrangente, ou seja, a variável é "elevada" até o topo do seu contexto de execução
function foo() {
  console.log(hello)
}

var hello = 'Hello World'

foo()

// Iniciando a variável dentro do mesmo escopo de execução
// A variável precisa ser inicializada antes de ser usada
function bar() {
  console.log(world)
  if (true) {
    console.log(world)
  }
  var world = 'Hello World'
}
bar()

// Neste caso a var vai ser elevada até o topo do seu contexto de execução sendo possível printar hello world duas vezes
function fooBar() {
  if (true) {
    var helloWorld = 'Hello World';
    console.log(helloWorld)
  }
  console.log(helloWorld)
}

fooBar()