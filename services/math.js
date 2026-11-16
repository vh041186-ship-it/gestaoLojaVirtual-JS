import * as compras from "./carrinhoCompras.js"
import * as pedido from "./pedido.js";
export function CalcularTotal()
{
    const desconto = 0
 const subTotal = compras.carrinho.reduce((acumulador, a) => {
    return acumulador + a.preco * a.quantidade;
 }, 0);
 if(desconto > 0)
 {
    console.log("Houve desconto!");
     const total = subTotal - desconto;
     return total;
 }
   const total = subTotal;
    return total;
}
export function calcularFaturamento()
{
const faturamento = pedido.pedidos.reduce((acumulador, f) => {
   return acumulador + f.total;
}, 0)
   return faturamento;
}