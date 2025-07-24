import { useRef, useState } from "react"
import { Input } from "../../shared/components/Input"
import { FormularioLogin } from "./style"
import { Button } from "../../shared/components/Button"
import { useNavigate } from "react-router-dom"
import { Rota } from "../../shared/config"

export const Login = () =>{

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    const inputUsuarioRef = useRef<HTMLInputElement>(null);
    const inputSenhaRef = useRef<HTMLInputElement>(null);
    const buttonEntrarRef = useRef<HTMLButtonElement>(null);

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
                        value={usuario}
                        setValue={setUsuario}
                        refProximoItem={inputSenhaRef}
                    />
                    <Input.Base
                        ref={inputSenhaRef}
                        descricaoLabel="Senha"
                        value={senha}
                        setValue={setSenha}
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