import type { RefObject } from "react";
import { DivButton, StyledButton } from "./style";
import { Loading } from "../Loading";

export type TipoBotao =  "cadastrar" | "visualizar" | "cancelar" | "padrao"

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    divButtonStyle?: React.CSSProperties;
    botaoContainerFiltro?:boolean;
    tipoBotao?: TipoBotao;
    descricaoBotao: string;
    isLoading?: boolean;
    flex?: boolean;
    ref?: RefObject<HTMLButtonElement | null>
}

export const Button = ({
    botaoContainerFiltro,
    divButtonStyle,
    descricaoBotao,
    tipoBotao = "padrao",
    isLoading,
    flex,
    ref,
    ...rest
} : IButton) =>{
    return(
        <DivButton $botaoContainerFiltro={botaoContainerFiltro} style={divButtonStyle}>
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