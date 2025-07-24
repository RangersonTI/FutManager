import type { IFormularioComponentProps } from "../../global/types";
import { FormStyled, Titulo } from "./styled";
import { ArrowCircleLeftOutlined } from '@mui/icons-material';

interface IFormulario{
    propriedades: IFormularioComponentProps;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    acaoBotaoVoltar?: () => void;
}

export const Formulario = ({
    propriedades,
    onSubmit,
    acaoBotaoVoltar
}: IFormulario) =>{

    const {
        campos,
        possuiIconeVoltarTitulo = false,
        titulo
    } = propriedades;

    return(
        <FormStyled onSubmit={onSubmit}>
            {titulo && (
                <Titulo>
                    {possuiIconeVoltarTitulo &&
                        <div onClick={acaoBotaoVoltar}>
                            <ArrowCircleLeftOutlined/>
                        </div>
                    }
                    <span>{titulo}</span>
                </Titulo>
            )}
        </FormStyled>
    );
}