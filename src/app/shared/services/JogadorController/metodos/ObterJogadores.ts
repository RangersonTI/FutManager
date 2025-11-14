import { api } from "../../Api";
import { ApiException } from "../../ApiException";

export interface IJogadoresData{
    id: number;
    nome: string;
    posicaoJogadorId: number;
}

export const ObterJogadores = async(): Promise<IJogadoresData[]> =>{
    try{
        const { data } = await api.get<IJogadoresData[]>(`/jogador`);

        return data
    }
    catch(e){
        throw new ApiException(
            e, "Não foi possível obter a lista de jogadores"
        );
    }
}