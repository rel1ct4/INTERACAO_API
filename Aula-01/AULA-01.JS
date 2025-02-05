// let produto = 'camisa' // contexto global
// const preco = 50 // contexto global

// function calcularPrecoComDesconto () {

//     const desconto = 0.1
//     const precofinal = preco - preco * desconto
//     console.log(`Preço com desconto: R$${precofinal}`)

// }
// calcularPrecoComDesconto()
// console.log(produto)
// //consoel.log(desconto)

// for (let i = 0; i < 10; i++){

//     console.log(i)

// }
// let i = 10
// console.log(i)

const prato = 'pizza' //contexto global
const quantidade =3

function calcularTotal() {

    const preco = 45 // contexto local / bloco
    const total = preco * quantidade
    
    if(quantidade > 2){

        const desconto = 0.1 // contexto de bloco
        return total * ( 1 - desconto)
    
    }
    return total

}
console.log(` Preço total com desconto: R$${calcularTotal()}`)
// contexto global
console.log(prato)

