
import styled, { css } from "styled-components";
import type { TTamanhoDoCampo } from "../../../global/types";

interface IStyledInput {
    $tamanhoInput: TTamanhoDoCampo;
}

export const StyledInput = styled.div<IStyledInput>`

    display: grid;
    user-select: none;
    padding: 1rem;

    label{
        font-weight: 800;
        font-size: 18px;
    }

    input{
        padding: 5px;
        padding-left: 10px;
        border-radius: 3px;
        width: 100%;

        font-weight: 500;
        flex: 1;
        
        ${(p) =>
            p.$tamanhoInput === 'g' && css` width: 30rem `
        }

        ${(p) =>
            p.$tamanhoInput === 'm' && css` width: 20rem `
        }

        ${(p) =>
            p.$tamanhoInput === 'p' && css` width: 12rem `
        }

        ${(p) =>
            p.$tamanhoInput === 'pp' && css` width: 6rem`
        }
    }
`