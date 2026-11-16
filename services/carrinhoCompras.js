import * as validCatalogo from "../validators/validationProdutos.js"

 export const carrinho = [];
 export function adicionarNoCarrinho(produto)
{
    if(validCatalogo.validacaoProdutos(produto))
    {
        console.log("Produto adicionado ao carrinho");
        const itens = produto.produtos.map(a => {
            return{
                nome: a.nome,
                preco: a.preco,
                quantidade: 3           
            }
        })
        carrinho.push(...itens);
        return carrinho;
    }
    return console.log("Nao foi possivel adicionar ao carrinho")
}
export function removerDoCarrinho(produto)
{
    if(carrinho.length === 0)
    {
        console.log("O carrinho esta fazio!");
        return carrinho;
    }
    console.log("Produto removido com sucesso!")
    const itemRemover = "Mouse gamer";
    const indice = carrinho.findIndex(p => p.nome === itemRemover)
    if(indice !== -1)
    {
        carrinho.splice(indice, 1)
        return carrinho;
    }
    return console.log("Produto não encontrado!");   
}

