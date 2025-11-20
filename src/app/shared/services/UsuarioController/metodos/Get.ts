import { ConfigApp } from "../../../config/app";
import type { MappeadObject } from "../../../global/types";
import { api } from "../../Api";
import { ApiException } from "../../ApiException"

export interface IGetUsuarioData extends MappeadObject {
    id: number;
    nome: string;
    email: string;
    senha: string | null;
    tipo_usuario_id: number;
}

export const Get = async(
    pagina: number
): Promise<IGetUsuarioData[]> => {
    try {
        const { data } = await api.get(`/Usuario?pagina=${pagina}&limite=${ConfigApp.LIMITE_PAGINACAO}`);
    
        return data;
    } 
    catch (error) {
        throw new ApiException(
            error,
            "Não possível obter os usuários!"
        );    
    }
}