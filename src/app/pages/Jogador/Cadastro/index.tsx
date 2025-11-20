import { useNavigate } from "react-router-dom";
import { Formulario } from "../../../shared/components/Formulario";
import { HeaderComConteudo } from "../../../shared/components/AsideBarComConteudo";
import { FormularioProps } from "../../../shared/global/form";
import { Rota } from "../../../shared/config";
import type { MappeadObject } from "../../../shared/global/types";
import { useState } from "react";
import { Mascarar } from "../../../shared/function/Mascarar";

export interface IJogadoresData extends MappeadObject{
    id: string;
    nomeJogador: string;
    idade: string;
}

const DADOS_INICIAS_NOVO_JOGADOR: IJogadoresData = {
    id: "",
    idade: "",
    nomeJogador: ""
}

export const CadastroDeJogador = () =>{
    
    const navigate = useNavigate();

    const [
        jogador,
        setJogador
    ] = useState(DADOS_INICIAS_NOVO_JOGADOR);

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) =>{

        const { name, value} = e.target

        const valoresNumericos = ["id", "idade"]

        console.log(name)

        setJogador({
            ...jogador,
            [name]: valoresNumericos.includes(name)
                ? Mascarar.paraNumero(value)
                : value
        });
    }

    const handleSalvarNovoJogador = async(e: React.FormEvent) =>{
        e.preventDefault();
    }

    return(
        <HeaderComConteudo>
            <Formulario
                propriedades={FormularioProps.Jogador}
                onSubmit={handleSalvarNovoJogador}
                acaoBotaoVoltar={() => navigate(Rota.Jogador)}
                handleChangeValue={handleChangeValue}
                values={jogador}
            />
        </HeaderComConteudo>
    );
}