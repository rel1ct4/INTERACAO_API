/** Execício 03.02
* Dado um array de palavras, crie uma função que receba esse array e retorne um novo array contendo 
* apenas as palavras que têm mais de três letras. */

// Declara um array chamado "palavras" contendo uma lista de strings.
const palavras = ["sol", "livro", "lua", "cadeira", "mesa", "mar"];

// Utilizamos o método filter() para criar um novo array com palavras que tenham mais de 3 caracteres.
const Mais3Caracteres = palavras.filter((palavra) => {
    // Verificamos se o comprimento da palavra é maior que 3.
    return palavra.length > 3;
});

// Exibimos no console o novo array contendo apenas as palavras com mais de 3 caracteres.
console.log(Mais3Caracteres);