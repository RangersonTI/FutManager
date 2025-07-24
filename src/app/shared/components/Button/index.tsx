import type { RefObject } from "react";
import { DivButton, StyledButton } from "./style";

export type TipoBotao =  "cadastrar" | "visualizar" | "cancelar" | "padrao"

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    tipoBotao?: TipoBotao;
    descricaoBotao: string;
    flex?: boolean;
    ref?: RefObject<HTMLButtonElement | null> 
}

export const Button = ({
    descricaoBotao,
    tipoBotao = "padrao",
    flex,
    ref,
    ...rest
} : IButton) =>{
    return(
        <DivButton>
            <StyledButton
                ref={ref}
                $tipoBotao={tipoBotao}
                $flex={flex}
                {...rest}
            >
                {descricaoBotao}
            </StyledButton>
        </DivButton>
    );
}