//Execício 03.01
// Dado um array de números, crie uma função que receba esse array e retorne um novo array onde cada número é multiplicado por 2.

// Declara um array com uma lista de números inteiros
const array = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53];

// Utiliza o método map para criar um novo array, multiplicando cada elemento do array original por 2
const multiplicaPorDois = array.map((elemento) => {
    return elemento * 2; // Multiplica cada número por 2 e retorna o novo valor
});

// Exibe o novo array no console, mostrando os valores multiplicados
console.log(multiplicaPorDois);
