// Definição de um array contendo números inteiros de 1 a 5
const numeros = [1, 2, 3, 4, 5]

// Declara uma função que recebe um número (x) e retorna o dobro dele
const dobro = (x) => x * 2

// Declara uma função que recebe um número (y) e retorna o triplo dele
const triplo = (y) => y * 3

// Declara uma função que recebe um array e duas funções como parâmetros
const dobroTriplo = (array, func1, func2) => {
    // Utiliza template string para imprimir:
    // 1. O array original
    // 2. O resultado da aplicação da primeira função (dobro) a cada elemento do array
    // 3. O resultado da aplicação da segunda função (triplo) a cada elemento do array
    console.log(`O vetor: ${array} \no dobro: ${array.map(func1)} \no triplo: ${array.map(func2)}`)
}

// Chama a função passando o array "numeros" e as funções "dobro" e "triplo"
dobroTriplo(numeros, dobro, triplo)
