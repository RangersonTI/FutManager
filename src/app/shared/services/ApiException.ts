import axios from "axios";
import { Verificar } from "../function/Verificar";
import { Redirecionar } from "../function/Redirecionar";

export class ApiException extends Error{

    public readonly mensagem: string = '';

    public readonly status: number = 0;

    constructor(error: any, mensagemPersonalizada: string){

        super();

        if(axios.isAxiosError(error)){
            const erro = error.response;

            if(erro?.status === 400 || erro?.status ===  404 || erro?.status === 500 ) {
                if(Verificar.sePossuiMensagemDeErro(erro.data)){
                    this.mensagem = erro.data.mensagem;
                    this.status = erro.data.status;
                } else {
                    this.mensagem = mensagemPersonalizada;
                }
            } else if(erro?.status ===  401) {
                Redirecionar.paraLogin();
            } else if(error.code ===  "ERR_NETWORK") {
                this.mensagem = "Ocorreu um erro ao se conectar ao servidor. Por favor, verifique sua conexão e tente novamente!"
            } else {
                this.mensagem = mensagemPersonalizada;
            }
        } else {
            this.mensagem = mensagemPersonalizada;
        }
    };
}