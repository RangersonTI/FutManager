import { useRef, useState } from "react"
import { Input } from "../../shared/components/Input"
import { FormularioLogin } from "./style"
import { Button } from "../../shared/components/Button"
import { useNavigate } from "react-router-dom"
import { Rota } from "../../shared/config"

interface IDadosLogin {
    usuario: string;
    senha: string;
}

export const Login = () =>{

    const [
        dadosLogin,
        setDadosLogin
    ] = useState({} as IDadosLogin);

    const navigate = useNavigate();

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
            navigate(Rota.Inicio);
        }
        catch(error){
            console.warn(error);
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
                        value={dadosLogin.usuario}
                        handleChangeValue={handleChangeValue}
                        refProximoItem={inputSenhaRef}
                    />
                    <Input.Base
                        ref={inputSenhaRef}
                        descricaoLabel="Senha"
                        value={dadosLogin.senha}
                        handleChangeValue={handleChangeValue}
                        refProximoItem={buttonEntrarRef}
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