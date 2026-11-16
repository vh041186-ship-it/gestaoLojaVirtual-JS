export const loja = {
    nome: "TechStore",
    clientes: [
        {
            id: 1,
            nome: "Victor",
            email: "victor@email.com"
        }
    ],
    produtos: [
        {
            id: 101,
            nome: "Teclado mecânico",
            preco: 250,
            estoque: 10,
            categoria: "Periféricos"
        },
        {
            id: 102,
            nome: "Mouse gamer",
            preco: 150,
            estoque: 5,
            categoria: "Periféricos"
        }
    ],
    pedidos: []
};

import * as valid from "./validators/validations.js";
import * as app from "./services/app.js";
import * as catalogo  from "./controlers/produtos.js";
import * as compras from "./services/carrinhoCompras.js";
import * as math from "./services/math.js";
import * as pedido from "./services/pedido.js";
import * as validarPedido from "./validators/validatorPedido.js";
import * as relatorio from "./services/relatorio.js";

//validacoes//
console.log(valid.validarNome(loja));
console.log(valid.validarEmail(loja));
console.log(app.buscarCliente(loja));

//dados publicos//
console.log("Dados Publicos");
console.log(app.dadosPublicos(loja));

//lista de produtos//
console.log(catalogo.listaProdutos(loja));
console.log(catalogo.buscaProduto(loja));

console.log(catalogo.filtroCategoria(loja));
console.log(catalogo.filtroFaixaPreco(loja));
console.log(catalogo.produtosOrdenadosPorPreco(loja));
console.log(catalogo.disponibilidade(loja));

console.log(compras.adicionarNoCarrinho(loja));
console.log(compras.removerDoCarrinho(loja));
console.log("Valor total do carrinho R$" + math.CalcularTotal());

console.log(validarPedido.validarPedido(loja));    
console.log(pedido.buscarPedido());
console.log(pedido.pedidosPendentes());
console.log(pedido.cancelarPedido());
console.log("Faturamento");
console.log("R$" + math.calcularFaturamento());

console.log("\nRetatorios");
console.log("Produto mais caro");
console.log(relatorio.relatorioProdutos(loja));
console.log("Estoque");
console.log(relatorio.semEstoque(loja));
console.log("Pedidos pagos");
console.log(relatorio.pedidosPagos());
console.log("Pedidos em andamento");
console.log(relatorio.emAndamento());
console.log("Produtos mais vendido");
console.log(relatorio.produtoMaisVendido());