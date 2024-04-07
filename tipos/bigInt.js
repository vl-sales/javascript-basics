
let numero1 = 9007199254740991n; // O maior número inteiro que pode ser representado em JavaScript
let numero2 = BigInt("12345678901234567890");

console.log(typeof numero1)
console.log(typeof numero2)

// Operações aritméticas básicas
let soma = numero1 + numero2 // Soma
let subtracao = numero2 - numero1 // Subtração
let multiplicacao = numero1 * numero2 // Multiplicação
let divisao = numero2 / numero1 // Divisão

console.log("Soma:", soma)
console.log("Subtração:", subtracao)
console.log("Multiplicação:", multiplicacao)
console.log("Divisão:", divisao)

// Incremento e Decremento
numero1++ // Incremento de 1 em numero1
numero2-- // Decremento de 1 em numero2

console.log("Incremento:", numero1)
console.log("Decremento:", numero2)

// Potenciação
let potencia = Math.pow(numero1, 2) // Eleva numero1 ao quadrado
console.log("Potência:", potencia)

// Raiz quadrada
let raizQuadrada = Math.sqrt(potencia) // Raiz quadrada de numero1^2
console.log("Raiz Quadrada:", raizQuadrada)

// Somas com string
console.log(numero1 + '2')
console.log(numero1 + 'undefined')
