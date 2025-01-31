// const array = [12, 3, 4, 5,6]
// console.log(array)
// array.push(2)// Adiciona o valor no final do array
// console.log(array)
// array.unshift(3) //adiciona o valor no inicio do array
// console.log(array)
// array.pop() //remove o primeiro elemento do array
// console.log(array)
// array.shift() //remove o último elemento do array
// console.log()

const numeros = [ 4, 6, 5, 8, 9, 20, 56, 45]
// 1 ° - vai ser o elemento, 2°? ( ? significa opcional) indice/index(significa posição do elemento)
numeros.forEach( (elemento, index, array) => {
    console.log(`${elemento} - ${index} - ${array}`)
})

const soma = (x) => x + 5
numeros.map((elemento) => {
    console.log(elemento * 2)
})
console.log(numeros.map(soma))