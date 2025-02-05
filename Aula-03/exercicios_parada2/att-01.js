let produtos = [{ nome: 'Camiseta', categoria: 'Roupas' }, { nome: 'Celular', categoria: 'Eletrônicos' }];
let precos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];

//att01
console.log("Att01")
const combinarProdutos = (prod, prec) => {
  return prod.map( (prod) => {
    let precoProduto = prec.find( (prec) => prec.nome === prod.nome)

    return {
      nome: prod.nome,
      categoria: prod.categoria,
      preco: precoProduto.preco
    }
  })

}
combinarProdutos(produtos, precos)
console.log(combinarProdutos(produtos,precos))

//att02

console.log("Att02")
const buscar = (categoria, arrayprodutos) => {

  return arrayprodutos.filter( (produto) => produto.categoria === categoria)
}

buscar('Eletrônicos', produtos)
console.log(buscar('Eletrônicos', produtos))

//att03

let itens = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];
let quantidades = [3, 1];

console.log("Att03")
const Precototal = (array1, array2) => {
  // console.log("dentro da função", array1)
  // console.log("Dentro da função", array2)

  return array1.map((produto, index) => {
    let precoVenda = produto.preco *  array2[index]
    // console.log(precoVenda)
     return {
      nome: produto.nome,
      preço: produto.preco,
      valorTotal: precoVenda,

    }

  })

}

Precototal(itens, quantidades)
console.log(Precototal(itens, quantidades))

//Att04

let precomin = [
  { nome: 'Camiseta', preco: 20 },
  { nome: 'Celular', preco: 500 },
  { nome: 'Caneca', preco: 10 }
];

const encontrarProdutos = (prod, min) => {
  return prod.filter(prod => prod.preco >= min);
}
let produtosFiltrados = encontrarProdutos(produtos, 50);
console.log(produtosFiltrados);
