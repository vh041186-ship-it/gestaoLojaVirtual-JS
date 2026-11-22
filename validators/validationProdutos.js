export function validandoProduto(array)
{
    const erros = [];
    if(Array.isArray(array) || array.lenght === 0 )
    {
        erros.push("Nao existe nenhum produto");
        console.log(erros);
        return false;
    }
    return true;
}
export function validacaoProdutos(prod)
{
    const erros = [];
    prod.produtos.forEach(p => {
            if(typeof p.nome !== "string" || p.nome.trim() === "" || p.nome.lenght === 0)
    {
        erros.push("Nome do produto invalido");
        return false;
    }
    if(typeof p.id !== "number" || !Number.isInteger(p.id) || p.id <= 0)
    {
        erros.push("Id do produto invalido");
        return false;
    }
    if(typeof p.preco !== "number" || !Number.isFinite(p.preco) || p.preco <= 0)
    {
        erros.push("O preco e invalido");
        return false;
    }
    if(typeof p.estoque !== "number" || !Number.isInteger(p.estoque) || p.estoque < 0)
    {
        erros.push("Quantidade em estoque invalida");
        return false;
    }
    if(typeof p.categoria !== "string" || p.categoria.lenght === 0 || p.categoria.trim() === "")
    {
        erros.push("Categoria invalida");
        return false;
        
    }
    });
    return true;
}