import * as car from "./carrinhoCompras.js"
import * as math from "./math.js"
import * as cliente from "./app.js"

export const pedidos = [];

export function criarPedido(pedido)
{
    const numero = Math.floor(Math.random() * 100) + 1;
    const nomeCliente = pedido.clientes.find(n => n.id === 1)
    const {email, id, ...nome} = nomeCliente
    const recebePedido = car.carrinho.map(a => {
        return{
            id: 1,
            cliente: nome,
            produto: a.nome,
            quantidade: a.quantidade,
            total: math.CalcularTotal(),
            status: "Pendente"
        }
    })
    pedidos.push(...recebePedido);
    return pedidos;
}
export function buscarPedido()
{
    console.log("Pedido encontrado!")
    const buscar = 1;
    const buscapedido = pedidos.find(b => b.id === buscar)
    return buscapedido;
}
export function pedidosPendentes()
{
    const pendentes = pedidos.find(a => a.status === "Pendente")
    console.log("Pedidos pendentes")
    return pendentes;
}
export function cancelarPedido()
{
    const procurar = 1;
    const pedidoId = pedidos.find(a => a.id === procurar)
    if(pedidoId.status !== "Cancelado")
    {
        console.log("Pedido cancelado");
        pedidoId.status = "Cancelado"
        return pedidos
    }
    console.log("Pedido ja esta cancelado");
    return pedidos;
}

