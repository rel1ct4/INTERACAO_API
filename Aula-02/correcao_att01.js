let array1 = [1, 2, 3, 4 ,5 ,6]

const listarDados = array1.forEach((elemento) =>{
    console.log(elemento * 2)
})
console.log( listarDados)

const multiplicarPorCinco = array1.map((elemento) => {
    return elemento * 5 
})
console.log( multiplicarPorCinco)

// const maisDois = multiplicarPorCinco.map((elemento) => {
//     return elemento + 2
// })
// console.log(maisDois)

// const maisdois = listarDados.map((elemento) => {
//     return elemento + 2
// })
// console.log(maisdois)

//encontre número maior que 6
let procura = multiplicarPorCinco.find(function(elemento) {
    return elemento > 6
})
console.log(procura)

let procuraa = multiplicarPorCinco.filter(function(elemento) {
    return elemento > 6
})
console.log(procuraa)