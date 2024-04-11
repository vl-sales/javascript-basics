function comparaNumeros(n1, n2) {
  if (!n1 || !n2) {
    console.log('Falta parâmetro')
  } else if (n1 > n2) {
    console.log('N1 maior que N2')
  } else {
    console.log('Os parâmetros existem e N1 não é maior que N2')
  }
}

comparaNumeros(undefined, 2)
comparaNumeros(2, 1)
comparaNumeros(1, 2)

const valorSwitch = 'Vinicius'
switch (valorSwitch) {
  case 'Vinicius':
    console.log('1º clausula switch')
    break;
  case 'Outro nome':
    console.log('2º clausula switch')
  default:
    console.log('default')
    break;
}