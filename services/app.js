import * as valid from "../validators/validations.js";
export function buscarCliente(buscar)
{ 
    const erros = [];
    if(valid.validarId(buscar) === false)
    {
        erros.push = ("Nao encontrado ou id invalido");
        return erros;
    }
    console.log("Cliente encontrado");
      const busca = buscar.clientes.find(b => b.id === 1)
      const {id, ...publico} = busca;
        return publico;
}
export function dadosPublicos(publicos)
{
    const dadosPublicos = publicos.clientes.map(a => {
        return{
            nome: a.nome,
            email: a.email
        }
    })
    return dadosPublicos;
}
