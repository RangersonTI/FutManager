import type { RefObject } from "react";
import { DivButton, StyledButton } from "./style";
import { Loading } from "../Loading";

export type TipoBotao =  "cadastrar" | "visualizar" | "cancelar" | "padrao"

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    tipoBotao?: TipoBotao;
    descricaoBotao: string;
    isLoading?: boolean;
    flex?: boolean;
    ref?: RefObject<HTMLButtonElement | null>
}

export const Button = ({
    descricaoBotao,
    tipoBotao = "padrao",
    isLoading,
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
                disabled={isLoading}
                {...rest}
            >
                {isLoading
                    ? <Loading/>
                    : <>{ descricaoBotao }</>
                }
            </StyledButton>
        </DivButton>
    );
}