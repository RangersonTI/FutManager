
interface ErrorResponse{
    mensagem: string;
    status: number;
}


const sePossuiMensagemDeErro = (object: any) : object is ErrorResponse => {
    return(object && "mensagem" in object && typeof object.mensagem === "string")
}

export const Verificar = { sePossuiMensagemDeErro }