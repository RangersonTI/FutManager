import styled, { css } from "styled-components";
import type { TipoBotao } from ".";

interface IStyledButton{
    $tipoBotao: TipoBotao;
    $flex?: boolean;
}

export const StyledButton = styled.button<IStyledButton>`
    border-radius: 5px;
    border: 1px solid;
    cursor: pointer;

    text-transform: uppercase;
    font-weight: 800;
    font-size: 20px;
    color: var(--branco);

    padding: 0.5rem 1.2rem;
    
    ${p => p.$flex && css`
        width: 100%;
    `}

    ${p => p.$tipoBotao === "cadastrar"
            ? css`
                background-color: var(--azul);
                border-color: #4a84ff;

                &:hover{
                    box-shadow:0px 0px 10px #4a84ff;
                }
            `
            : p.$tipoBotao === "cancelar"
            ? css`
                background-color: var(--vermelho);
                border-color: #e63333;

                &:hover{
                    box-shadow:0px 0px 10px #e63333;
                }
                `
            : p.$tipoBotao === "visualizar"
            ? css`
                background-color: var(--cinza);
                border-color: #666666;

                &:hover{
                    box-shadow:0px 0px 10px #666666;
                }
                `
            : css`
                background-color: var(--verde-escuro);
                border-color: #164715;

                &:hover{
                    box-shadow:0px 0px 10px #164715;
                }
            `
    }
`

export const DivButton = styled.div`
    user-select: none;
    padding: 1rem;
`