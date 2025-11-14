import type { IFormularioComponentProps } from "../types"

const Jogador: IFormularioComponentProps = {
    titulo: "Cadastro de Jogador",
    possuiIconeVoltarTitulo: true,
    campos: [
        {
            campoName: 'id',
            label: 'ID',
            placeholder: 'Informe o id do jogador',
            tamanhoCampo: 'pp'
        },
        {
            campoName: 'posicaoJogadorId',
            label: 'Posição',
            placeholder: 'Informe a idade do jogador',
            tamanhoCampo: 'pp'
        },
        {
            campoName: 'nome',
            label: 'Nome',
            placeholder: 'Informe o nome do jogador',
            tamanhoCampo: 'g'
        },
    ]
}

export const FormularioProps = {
    Jogador
}