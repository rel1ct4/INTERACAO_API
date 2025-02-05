//Funções 

function triplo (x) {

    return x * 3
    
} 

//arrow function
triplo = (x) => {
    return x * 3

}

triplo = (x) => x * 3

// Função sem nome 
ola = () => 'olá' // Função sem parametro, com retorno
ola = _ => 'olá' // Com parametro, com retorno

// Função callback
const soma = function (x, y) {

    return x + y

}

const resultado = function ( a, b, operacao = soma){
    console.log(operacao(a,b))
}
resultado(2,4)
resultado(5,4, soma)
resultado (4,3, function(y, z){
    return y * z
})