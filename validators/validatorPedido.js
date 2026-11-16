import * as pedido from "../services/pedido.js"


export function validarPedido(verficar)
{
    console.log("Pedido criado")
   const pedidos = pedido.criarPedido(verficar);
    pedidos.forEach(a => {
        if(typeof a.status !== "string" || a.status.trim() === "")
        {
            return false;
        }
    })
    return pedidos;;
}
