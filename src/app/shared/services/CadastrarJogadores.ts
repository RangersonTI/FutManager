import { api } from "./Api";
import { ApiException } from "./ApiException";

export interface INovoJogadorData{
    id: number;
    nomeJogador: string;
    idade: number;
}

export const CadastrarJogadores = async(body: INovoJogadorData) =>{
    try{
        await api.post(`/jogador`,body)
    }
    catch(e){
        throw new ApiException(
            e, "Não foi possível cadastrar um novo jogador"
        );
    }
}