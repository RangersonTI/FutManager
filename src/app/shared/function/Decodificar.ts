import { jwtDecode } from "jwt-decode";
import type { ITokenDecodificadoProps } from "../global/types";

export const token = (token: string) => {
    return jwtDecode<ITokenDecodificadoProps>(token);
}

export const Decodificar = {
    token
}