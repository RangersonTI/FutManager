import styled from "styled-components";


export const FormularioLogin = styled.div`
    width: 100dvw;
    height: 100dvh;

    display: flex;
    align-items: center;
    justify-content: center;

    .formulario-login{
        width: 450px;
        padding: 1rem;

        background-color: var(--branco);
        border-radius: 5px;
        border: 1px solid var(--cinza);

        .titulo-login{
            padding: 1rem 0;
            text-align: center;
            font-family: 'Modular Amplitude', sans-serif;
            font-size: 40px;
        }

        .agrup-campos-login {
            padding: 2rem 0;
        }
    }
`