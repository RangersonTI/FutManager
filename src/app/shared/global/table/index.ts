import type { IConfiguracaoTabelaProps } from "../types"

const Usuarios: IConfiguracaoTabelaProps[] = [
    {
        campo: "ID",
        codigo: "id"
    },
    {
        campo: "Nome",
        codigo: "nome",
    },
    {
        campo: "Email",
        codigo: "email",
    },
    {
        campo: "Tipo Usuário",
        codigo: "tipo_usuario_id",
    },
    {
        campo: "Senha",
        codigo: "senha",
    }
]


export const ConfiguracaoTabela = {
    Usuarios
}