import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { ITokenDecodificadoProps } from "../../global/types";
import { jwtDecode } from "jwt-decode"
import { Decodificar } from "../../function/Decodificar";

interface IAuthenticationContextData {
    token: string;
    setToken: React.Dispatch<
        React.SetStateAction<string>
    >;
    dadosUsuarioLogado: ITokenDecodificadoProps;
    setDadosUsuarioLogado: React.Dispatch<
        React.SetStateAction<ITokenDecodificadoProps>
    >;
}

interface IAutheticationProviderProps{
    children: ReactNode 
}

const AuthenticationContext = createContext({} as IAuthenticationContextData);

function AuthenticationProvider({
    children
}: IAutheticationProviderProps) {

    const [
        token,
        setToken
    ] = useState("");

    const [
        dadosUsuarioLogado,
        setDadosUsuarioLogado
    ] = useState({} as ITokenDecodificadoProps);

    return(
        <AuthenticationContext.Provider
            value={{
                token,
                setToken,

                dadosUsuarioLogado,
                setDadosUsuarioLogado
            }}
        >
            { children }
        </AuthenticationContext.Provider>
    );
}

const useAuthetication = () => {
    const context = useContext(AuthenticationContext);

    return context;
}

export { AuthenticationProvider, useAuthetication }