
import styled, { css } from "styled-components";
import type { TTamanhoDoCampo } from "../../../global/types";

interface IStyledInput {
    $tamanhoInput: TTamanhoDoCampo;
}

export const StyledInput = styled.div<IStyledInput>`

    display: grid;
    padding: 0.7rem;
    user-select: none;
    gap: 2px;

    label{
        font-weight: 800;
        font-size: 18px;
    }

    input{
        border-radius: 3px;
        font-weight: 500;

        ${(p) =>
            p.$tamanhoInput === 'pp' && css` width: 6rem` ||
            p.$tamanhoInput === 'p' && css` width: 12rem` ||
            p.$tamanhoInput === 'm' && css` width: 20rem` ||
            p.$tamanhoInput === 'g' && css` width: 30rem`
        }
    }
`