// Dado um array de números, crie uma função que receba esse array e retorne a soma de todos os elementos.

const numeros = [1, 2, 3, 4, 5]
let acumuladora



function soma(numeros, acumuladora) {

    for(i = 0; i >= numeros.length; i++){
        acumuladora = acumuladora + numeros[i]
    }
    return acumuladora
}
  console.log(typeof soma)
  console.log(acumuladora)