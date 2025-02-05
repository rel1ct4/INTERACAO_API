
//Exercício 03.03
// Dado um array de números, crie uma função que receba esse array e retorne a soma de todos os elementos.

// declara um array chamado "numeros" contendo uma sequência de números de 1 a 5
const numeros = [1, 2, 3, 4, 5];

// Utilizamos o método "reduce" para somar todos os elementos do array
// O método "reduce" recebe uma função de callback e um valor inicial (0 neste caso)

// A função de callback recebe dois parâmetros:
// - "total": Acumulador que armazena a soma dos elementos anteriores
// - "atual": Elemento atual do array que está sendo processado

const somaTodos = numeros.reduce((total, atual) => total + atual, 0);

// Exibimos o resultado da soma no console
console.log(somaTodos); // Saída: 15
