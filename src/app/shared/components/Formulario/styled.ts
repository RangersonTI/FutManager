import styled from "styled-components";

export const FormStyled = styled.form`
    width: 100%;
    grid-gap: 10px;
`

export const Titulo = styled.div`
    /* width: 100%; */
    display: flex;
    align-items: center;
    gap: 10px;
    user-select: none;

    padding: 1rem 0;

    span{
        font-weight: 900;
        font-size: 2rem;
    };

    svg{
        width: 3rem;
        height: 3rem;
        color: var(--preto-fosco);
        cursor: pointer;
    };
`;

export const AgrupamentoCamposForm = styled.div`
    display: flex;
    gap: 0.250rem;

    input{
        
    }
`