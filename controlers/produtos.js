import * as validCatalogo from "../validators/validationProdutos.js"


export function listaProdutos(produto)
{
   if(validCatalogo.validandoProduto(produto) && validCatalogo.validacaoProdutos(produto))
   {
    console.log("Lista Produtos")
         const listaProdutos = produto.produtos.map(a => {
        return{
            nome: a.nome,
            preco: a.preco,
            categoria: a.categoria
        }
    })
    return listaProdutos;
   }
    return console.log("lista de produtos vazia!");
}

export function buscaProduto(busca)
{
     if(validCatalogo.validandoProduto(busca) && validCatalogo.validacaoProdutos(busca))
     {
        console.log("Buscando produto")
        const buscarProduto = busca.produtos.find(b => b.nome === "Teclado mecânico")
        const {id, estoque, ...produtoPublico} = buscarProduto;
        return produtoPublico;
     }

    return console.log("Nenhum produto encontrado");
}
export function filtroCategoria(produto) 
{
    if(validCatalogo.validandoProduto(produto) && validCatalogo.validacaoProdutos(produto))
    {
        console.log("Filtrado por categoria")
        const filtrados = produto.produtos.filter(a => a.categoria === "Periféricos")
       const mostrarPublicos = filtrados.map(a => {
        const [{id, estoque, ...publicos}] = filtrados;
        return publicos 
       });
        return mostrarPublicos;
    }
    return console.log("Nenhum produto encontrado");    
}
export function filtroFaixaPreco(produto)
{
    if(validCatalogo.validandoProduto(produto) && validCatalogo.validacaoProdutos(produto))
    {
        console.log("Filtrado por faixa de preço");
        const filtradosPreco = produto.produtos.filter(a =>  a.preco < 200)
       const mostraPublicos = filtradosPreco.map(a => {
         const [{id, estoque, ...publicos}] = filtradosPreco
         return publicos;
       })
        return mostraPublicos;
    }
    return console.log("Nenhum produto encontrado");
}
export function produtosOrdenadosPorPreco(ordenado)
{
    console.log("Ordenado por preço");
      if(validCatalogo.validandoProduto(ordenado) && validCatalogo.validacaoProdutos(ordenado))
      {
         const mostraOrdenados = ordenado.produtos.map(a =>{
        return {
            nome: a.nome,
            preco: a.preco,
            categoria: a.categoria
        }
        });
        const ordenados = [...mostraOrdenados].sort((a, b) => b.preco - a.preco);
         return ordenados;
      }
   return console.log("Produto inlido, nao pode ser ordenado");
}
export function disponibilidade(estoque)
{
    console.log("produtos diponiveis em estoque");
     if(!validCatalogo.validandoProduto(estoque) || !validCatalogo.validacaoProdutos(estoque))
     {
        return console.log("produto invalido ou indisponivel");
     }
     const produtos = estoque.produtos.map(a => {
        return {
        nome: a.nome,
        estoque: a.estoque
        }
     });
     const disponiveis = produtos.filter(a => a.estoque > 0)
     return disponiveis;
}