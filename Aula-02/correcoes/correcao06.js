/** Exercício 03.04
* Crie duas funções, uma que dobre um número e outra que triplique um número. Em seguida, crie
* uma terceira função que utilize essas duas funções para calcular a soma do dobro e do triplo de um número. */

// Declara uma função chamada "dobro" que recebe um número como argumento e retorna o seu dobro.
const dobro = (numero) => numero * 2;

// Declara uma função chamada "triplo" que recebe um número como argumento e retorna o seu triplo.
const triplo = (numero) => numero * 3;

// Declara uma função chamada "dobroTriplo" que recebe três parâmetros:
// - numero: o valor que será dobrado e triplicado
// - fun1: uma função que será aplicada para dobrar o número
// - fun2: uma função que será aplicada para triplicar o número
const dobroTriplo = (numero, fun1, fun2) => {
    // Exibe no console uma mensagem informando o dobro e o triplo do número
    console.log(`O dobro do ${numero} é ${fun1(numero)}, o triplo ${fun2(numero)}`);
}

// Chama a função "dobroTriplo" passando:
// - o número 2
// - a função "dobro" para calcular o dobro
// - a função "triplo" para calcular o triplo
dobroTriplo(2, dobro, triplo);
