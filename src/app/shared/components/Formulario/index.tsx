
import type { IFormularioComponentProps, MappeadObject } from "../../global/types";
import { Input } from "../Input";
import { AgrupamentoCamposForm, FormStyled, Titulo } from "./styled";
import { ArrowCircleLeftOutlined } from '@mui/icons-material';

interface IFormulario{
    propriedades: IFormularioComponentProps;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    acaoBotaoVoltar?: () => void;
    values: MappeadObject;
    handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Formulario = ({
    propriedades,
    onSubmit,
    acaoBotaoVoltar,
    values,
    handleChangeValue
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
            <AgrupamentoCamposForm>
                {campos.map((campo) =>(
                    <Input.Base
                        tamanhoInput={campo.tamanhoCampo}
                        descricaoLabel={campo.label}
                        id={campo.campoId}
                        name={campo.campoName}
                        value={values[campo.campoName]}
                        handleChangeValue={handleChangeValue}
                    />
                ))}
            </AgrupamentoCamposForm>
        </FormStyled>
    );
}