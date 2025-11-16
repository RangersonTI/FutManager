import { useRef, useState } from "react"
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
            [name] : value
        })
    }

    const handleFazerLogin = async() =>{
        try{
            const { token } = await AutenticacaoController.GerarToken({
                id: dadosLogin.usuario,
                senha:dadosLogin.senha
            });

            setToken(token);

            sessionStorage.setItem(storage.TOKEN, token);

            setTimeout(
                () => navigate(Rota.Inicio),
                500
            );
        }
        catch(error){
            toast.error(obterMensagemDeErro(error))
        }
    }

    return(
        <FormularioLogin>
            <div className="formulario-login">
                <div className="titulo-login"> LOGIN </div>
                <div>
                    <Input.Base
                        ref={inputUsuarioRef}
                        descricaoLabel="Usuário"
                        value={
                            Mascarar.paraNumero(dadosLogin.usuario)
                        }
                        name="usuario"
                        handleChangeValue={handleChangeValue}
                        refProximoItem={inputSenhaRef}
                        placeholder="Informe seu ID de usuário!"
                        // title="Informe seu ID de usuário!"
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
                        flex
                    />
                </div>
            </div>
        </FormularioLogin>
    )
}