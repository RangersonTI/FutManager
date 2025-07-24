import { useNavigate } from "react-router-dom";
import { Formulario } from "../../../shared/components/Formulario";
import { HeaderComConteudo } from "../../../shared/components/HeaderComConteudo";
import { FormularioProps } from "../../../shared/global/form";
import { Rota } from "../../../shared/config";

export const CadastroDeJogador = () =>{
    
    const navigate = useNavigate();

    return(
        <HeaderComConteudo>
            <Formulario
                propriedades={FormularioProps.Jogador}
                onSubmit={()=>{}}
                acaoBotaoVoltar={() => navigate(Rota.Jogador)}
            />
        </HeaderComConteudo>
    );
}