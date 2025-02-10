// eventos

document.addEventListener("DOMContentLoaded", () =>{
    const url = 'https://api.chucknorris.io/jokes/categories'
    console.log(url)
    // console.log(url)
    fetch(url) //procure o htt
    .then((response) => {
        if(!response.ok){
            throw new console.error('Erro ao receber dados');
            
        }
        return response.json()
    }) //Então faça isso {processe o http}
    .then((data) => {
        gerarCategorias(data)
    }) //então faça isso {}
    .catch((err) => {
        console.log(err)

    });
    const gerarCategorias = (categorias) => {
        const select = document.getElementById('select')
        categorias.map((categorias) => {
            const options = document.createElement('option')
            options.innerHTML = `${categorias}`;
            options.value = categorias;
            options.id = categorias;
            select.appendChild(options);
        })
    }
})

const btnEnviar = document.getElementById('btnEnviar')
btnEnviar.addEventListener('click', async () => {
    const select = document.getElementById('select').value
   // console.log(select)
   const url = `https://api.chucknorris.io/jokes/random?category=${select}`

   await fetch(url)
   // 1º verifica a resposta
   .then((response) => {
    if(!response.ok){
        throw new Error('Erro ao buscar piada com categoria')
    }
    return response.json()
   }) 
   // 2º Pega a resposta e manda para uma função
   .then((data) => {
    gerarPiadas(data);
   })
   .catch((err) => console.log(err));
})

const gerarPiadas = (piada) => {
    const joke = document.getElementById("joke")
    joke.textContent = piada.value
}