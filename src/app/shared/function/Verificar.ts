
interface ErrorResponse{
    message: string;
    status: number;
}


const seEhMensagemDeErroApi = (object: any) : object is ErrorResponse => {
    return(object && "message" in object && typeof object.message === "string")
}

export const Verificar = { seEhMensagemDeErroApi }