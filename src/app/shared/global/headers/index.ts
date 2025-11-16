import { Rota } from "../../config";
import type { IConfiguracaoItemHeader } from "../types";

export const ConfiguracaoHeader: IConfiguracaoItemHeader[] = [
    {
        nomeItem: "Cadastros-Basicos",

        subItem: [
            {
                nomeSubItem: "Usuário",
                acaoDoBotao: "usuario",
                tipoAcao: "ambos"
            },
            {
                nomeSubItem: "Tipo-Usuário",
                acaoDoBotao: "tipo-usuario",
                tipoAcao: "ambos"
            },
            {
                nomeSubItem: "Punição",
                acaoDoBotao: "punicao",
                tipoAcao: "ambos"
            },
            {
                nomeSubItem: "Forma de Pagamento",
                acaoDoBotao: "forma-de-pagamento",
                tipoAcao: "ambos"
            },
            {
                nomeSubItem: "Contas à Receber",
                acaoDoBotao: "contas-a-receber",
                tipoAcao: "ambos"
            },
        ]
    },
    {
        nomeItem: "Partidas",
        rotaRaiz: `${Rota.Partida}`
        // subItem: [
        //     {
        //         nomeSubItem: "Nova Partida",
        //         acaoDoBotao: "partida",
        //         tipoAcao: "cadastro"
        //     },
        //     {
        //         nomeSubItem: "Ver Partidas",
        //         acaoDoBotao: "partida",
        //         tipoAcao: "visualizacao"
        //     },
        // ]
    },
    {
        nomeItem: "Jogadores",
        rotaRaiz: `${Rota.Jogador}`
        // subItem: [
        //     {
        //         nomeSubItem: "Novo Jogador",
        //         acaoDoBotao: "jogador",
        //         tipoAcao: "cadastro"
        //     },
        //     {
        //         nomeSubItem: "Ver Jogadores",
        //         acaoDoBotao: "jogador",
        //         tipoAcao: "visualizacao"
        //     }
        // ]
    },
    {
        nomeItem: "Horários",
        rotaRaiz: `${Rota.Horario}`
        // subItem: [
        //     {
        //         nomeSubItem: "Novo Horário",
        //         acaoDoBotao: "horario",
        //         tipoAcao: "cadastro"
        //     },
        //     {
        //         nomeSubItem: "Ver Horários",
        //         acaoDoBotao: "horario",
        //         tipoAcao: "visualizacao"
        //     }
        // ]
    },
]