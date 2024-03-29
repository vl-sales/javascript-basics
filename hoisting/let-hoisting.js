// let tem escopo de bloco, não iremos conseguir printar o mesmo hello world do caso da funçao fooBar no arquivo de var-hoisting.js
function foo() {
  if (true) {
    let hello = 'Hello World'
    console.log(hello)
  }

  console.log(hello)
}


foo()