export function validarNome(loja)
{
    const erros = [];
    loja.clientes.forEach(a => {
        if(typeof a.nome !== "string" || a.nome.trim() === ""|| a.nome.lenght <= 0)
        {
            erros.push("Nome Invalido");
        }
    });
    return erros;
}
export function validarEmail(loja)
{
    const erros = [];
    loja.clientes.forEach(a => {
        if(typeof a.email !== "string" || a.email.lenght <= 3 || a.email.trim() === "")
        {
            erros.push("Formato invalido");
        }
        if(!a.email.includes('@') || !a.email.endsWith(".com"))
        {
            erros.push("email invalido");
        }
    })
    return erros;
}
export function validarId(id)
{
    id.clientes.forEach(a => {
        if(typeof a.id !== "number" || !Number.isInteger(a.id) || a.id < 0)
        {
            return false;
        }
    });
    return true;
}