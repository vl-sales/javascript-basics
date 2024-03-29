function complexHoisting() {
  // a = undefined pois a declaração da variável é movida para o topo do contexto, porém a atribuição de valor
  // só acontece ao chegar na linha
  console.log(a) // undefined
  console.log(foo()) // "foo"
  
  var a = 1
  function foo() {
    return "foo"
  }
  
  console.log(a) // 1
  
  if (true) {
    var a = 2
    // função elevada até o topo da função complexHoisting
    function bar() {
      return "bar"
    }
  }
  
  console.log(a) // 2
  console.log(bar()) // "bar"
}

complexHoisting()