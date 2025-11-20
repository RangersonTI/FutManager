import { useEffect, useState } from "react"
import { Redirecionar } from "../../function/Redirecionar";
import { storage } from "../../config";
import { useAuthetication } from "../../hook/useAuthentication";
import { Decodificar } from "../../function/Decodificar";
import { api } from "../../services/Api";

interface IRotaPrivadaProps {
    componente: React.ElementType
}

const RedirecionarParaOLogin = () => {
    useEffect(
        () => {
            Redirecionar.paraLogin();
        },[]
    );

    return <></>
}

export const RotaPrivada = ({
    componente: RotaComponente
}: IRotaPrivadaProps) => {

    const {
        setDadosUsuarioLogado,
        setToken
    } = useAuthetication();

    const [
        estaValidandoLogin,
        setEstaValidandoLogin
    ] = useState(true);
    
    const [
        usuarioEstaLogado,
        setUsuarioEstaLogado
    ] = useState(false);

    useEffect(
        () => {
            const tokenStorage = sessionStorage.getItem(storage.TOKEN);
            console.warn(tokenStorage)

            if(tokenStorage) {
                try {
                    const tokenDecodificado = Decodificar.token(tokenStorage);

                    // OBTEM O TEMPO DE ESPIRAÇÃO E MILISEGUNDOS
                    const exp = tokenDecodificado.exp * 1000;
                    // OBTEM A DATA ATUAL EM MILISEGUNDOS
                    const now = Date.now();

                    console.warn(tokenDecodificado)
                    console.error(exp - now)

                    if(exp - now > 0){
                        setToken(tokenStorage);
                        setDadosUsuarioLogado(tokenDecodificado);
                        setUsuarioEstaLogado(true);
                        api.defaults.headers["Authorization"] = `Bearer ${tokenStorage}`
                    }
                }
                catch {  }
            }

            setEstaValidandoLogin(false);
        },[]
    );

    if(estaValidandoLogin) return <></>

    if(!usuarioEstaLogado) return <RedirecionarParaOLogin/>;

    return <RotaComponente/>
    // return <></>
}