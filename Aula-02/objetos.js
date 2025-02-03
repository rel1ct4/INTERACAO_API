// const array = [3, 4, 5, 6, ];
// const objeto = {
//     //pares: chave/valor
//     0: 1,
//     1: 2,
//     2: 3,
//     3: 4,
// };

// console.log(array(2))
// console.log(objeto[2])

//coleção de valores de objetos

const data = {
    pessoa1: {
        nome: "João",
        idade: 32,
        endereço: [{ //colocamos um array com um objeto dentro, pois a pessoas pode ter mais de um endereço
            tipo: 'residencial',
            rua: "Rua A",
            cidade: "Maceió-AL"
        },
        { tipo: 'comercial',
            rua: "Rua A",
            cidade: "Maceió-AL"

        }
        ]
    },
    pessoa2: {
        nome: "maria",
        idade: 32,
        endereço: [{ //colocamos um array com um objeto dentro, pois a pessoas pode ter mais de um endereço
            tipo: "residencial",
            rua: "Rua A",
            cidade: "Maceió-AL"
        },
        { tipo: 'comercial',
            rua: "Rua A",
            cidade: "Maceió-AL"

        }]
    },
}

// Idade de joão
console.log(data.pessoa1.idade)

//endereço comercial de maria
console.log(data.pessoa2.endereço[1]) // o segundo endereço escolhemos assim pq ele é um array então chamamos que nem um array

// listem todos os endereços de maria
console.log(data.pessoa2.endereço)

console.log(data.pessoa2.endereço.forEach((end) => {
    console.log(end.tipo)
}))