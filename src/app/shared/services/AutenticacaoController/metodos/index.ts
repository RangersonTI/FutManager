import { api } from "../../Api";
import { ApiException } from "../../ApiException"

interface ICredenciaisProps {
    id: string;
    senha: string;
}

export interface IAutenticacaoData {
    token: string;
}
export const GerarToken = async(body: ICredenciaisProps): Promise<IAutenticacaoData> => {
    try {
        const { data } = await api.post(`/autenticacao/gerar-token`, body);

        return data;
    } 
    catch (error) {
        throw new  ApiException(
            error,
            "Não foi possível realizar o login na aplicação!"
        );    
    }
}