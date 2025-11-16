import axios from "axios";
import type { ApiException } from "./ApiException";

const api = axios.create({
    baseURL: "http://192.168.1.110:5133/api"
})

const obterMensagemDeErro = (error: any) => (error as ApiException).mensagem

export { api, obterMensagemDeErro }