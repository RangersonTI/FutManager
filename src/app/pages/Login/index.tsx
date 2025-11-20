import { useMemo, useRef, useState } from "react"
import { Input } from "../../shared/components/Input"
import { FormularioLogin } from "./style"
import { Button } from "../../shared/components/Button"
import { useNavigate } from "react-router-dom"
import { Rota, storage } from "../../shared/config"
import { AutenticacaoController } from "../../shared/services/AutenticacaoController"
import { Mascarar } from "../../shared/function/Mascarar"
import { useAuthetication } from "../../shared/hook/useAuthentication"
import { toast } from "react-toastify"
import { obterMensagemDeErro } from "../../shared/services/Api"

interface IDadosLogin {
    usuario: string;
    senha: string;
}

export const Login = () =>{

    const {
        setToken
    } = useAuthetication();

    const [
        estaRealizandoLogin,
        setEstaRealizandoLogin
    ] = useState(false);

    const navigate = useNavigate();

    const [
        dadosLogin,
        setDadosLogin
    ] = useState({} as IDadosLogin);


    const inputUsuarioRef = useRef<HTMLInputElement>(null);
    const inputSenhaRef = useRef<HTMLInputElement>(null);
    const buttonEntrarRef = useRef<HTMLButtonElement>(null);

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {

        const {
            value,
            name
        } = e.target;

        setDadosLogin({
            ...dadosLogin,
            [name] : name === "usuario" 
                    ? Mascarar.paraNumero(value)
                    : value
        })
    }

    const handleFazerLogin = async() =>{

        const {
            senha,
            usuario
        } = dadosLogin;

        if(!usuario || usuario.length === 0)
            return toast.warn("Por favor, informe seu ID de usuário!");

        if(!senha || senha.length === 0)
            return toast.warn("Por favor, informe a sua senha!");

        setEstaRealizandoLogin(true);
        
        try{
            const { token } = await AutenticacaoController.GerarToken({
                id: dadosLogin.usuario,
                senha:dadosLogin.senha
            });
            
            setToken(token);
            
            sessionStorage.setItem(storage.TOKEN, token);

            navigate(Rota.Inicio);

        }
        catch(error){
            toast.error(obterMensagemDeErro(error))
        }
        setEstaRealizandoLogin(false);
    }

    const botaoEntrarDesativado = useMemo(
        () =>
            estaRealizandoLogin
        ,[
            estaRealizandoLogin
        ]
    );

    return(
        <FormularioLogin>
            <div className="formulario-login">
                <div className="titulo-login"> LOGIN </div>
                <div className="agrup-campos-login">
                    <Input.Base
                        ref={inputUsuarioRef}
                        descricaoLabel="Usuário"
                        value={dadosLogin.usuario}
                        name="usuario"
                        handleChangeValue={handleChangeValue}
                        refProximoItem={inputSenhaRef}
                        placeholder="Informe seu ID de usuário!"
                    />
                    <Input.Base
                        ref={inputSenhaRef}
                        descricaoLabel="Senha"
                        name="senha"
                        value={dadosLogin.senha}
                        handleChangeValue={handleChangeValue}
                        refProximoItem={buttonEntrarRef}
                        placeholder="Informe sua senha!"
                        type="password"
                    />
                    <Button
                        onClick={handleFazerLogin}
                        ref={buttonEntrarRef}
                        descricaoBotao="Entrar"
                        isLoading={estaRealizandoLogin}
                        disabled={botaoEntrarDesativado}
                        flex
                    />
                </div>
            </div>
        </FormularioLogin>
    )
}