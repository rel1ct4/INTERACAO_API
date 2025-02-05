/** Exercicio 01
* Faça uma função que receba um único valor.
* Essa função deverá retornar 1 se o número digitado for positivo ou 0 se o número digitado for negativo */ 

// Solicita ao usuário que digite um número através do prompt
// O valor retornado pelo prompt é sempre uma string, então usamos Number() para convertê-lo em um número
let num = Number(prompt('Digite um número'));

// Define uma função chamada verificaNum que recebe um parâmetro num. OBS: Um parâmentro pode ser nomeado de qualquer maneira, 
// respeitando o conceito de variaveis, o importante é como trabalhamos com ele no corpo da função e qual valor passamos para função
// no momento que ela é chamada
const verificaNum = (num) => {
// Verifica se o número é maior que 0
  if (num > 0) {
    return 1; // Se for maior que 0, retorna 1
  } else {
    return 0; // Se for menor ou igual a 0, retorna 0
  }
}

// Chama a função verificaNum passando o valor digitado pelo usuário (num)
// O resultado da função é impresso no console
console.log(verificaNum(num))