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