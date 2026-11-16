import * as produto from "../controlers/produtos.js";
import * as validCatalogo from "../validators/validationProdutos.js"
import * as ped from "./pedido.js"



export function relatorioProdutos(prod)
{
    const lista = produto.listaProdutos(prod);
    const produtoMaisCaro = [...lista].sort((a, b) => b.preco - a.preco)[0];
    return produtoMaisCaro;
}
export function semEstoque(prod)
{
    if(validCatalogo.validandoProduto(prod) && validCatalogo.validacaoProdutos(prod))
    {
        console.log("Produtos sem estoque:")
            const lista = prod.produtos.map(a => {
                return{
                    nome: a.nome,
                    estoque: a.estoque
                }
            });
            const semEstoque = lista.filter(a => a.estoque <= 0)
            return semEstoque;
    }
}
export function pedidosPagos()
{
  const pagos = ped.pedidos.filter(a => a.status === "Pago")
  if(pagos.length === 0)
  {
    console.log("Não pedidos pagos!");
    return 0;
  }
  return pagos;
}
export function emAndamento()
{
     const emAndamento = ped.pedidos.filter(a => a.status === "Pendente")
  if(emAndamento.length === 0)
  {
    console.log("Não pedidos em andamento!");
    return 0;
  }
  return emAndamento;
}
export function produtoMaisVendido()
{
    const maisVendido = [...ped.pedidos].sort((a, b) => b.quantidade - a.quantidade)[0];
    const {total, cliente, status, ...publico} = maisVendido
    return publico;
}