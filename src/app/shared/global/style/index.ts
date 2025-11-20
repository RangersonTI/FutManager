import { createGlobalStyle, keyframes } from 'styled-components'
import ImagemFundo from "../../assets/wallpaper/fundo.webp";

export const GlobalStyle = createGlobalStyle`

    :root{
        --azulado-fraco:#dee8ff;
        --azulado-medio: #BED2FF;
        --azulado-forte: #A8C2FF;
        --azul-claro: #9BBAFF;
        --azul-medio: #76A1FF;

        --verde-menta-claro: #CBF4CB;
        --verde-bambu-claro:#82c782ff;
        --verde-bambu: #6FAA6F;
        --verde-bambu-claro: #a7c3a7ff;
        --verde: #377936;
        --verde-escuro: #297128;
        --vermelho: #FD4E4E;
        --azul: #76A1FF;
        --cinza: #888888;
        --branco: #ffffff;
        --branco-opc-90: #eeeeee;

        --cinza-escuro: #444444;
        --preto: #111111;
        --preto-fosco: #333333;
        --preto-opc-50: #00000050;
        --desativado: #919191;

        // TOASTFY
        --toastify-color-info: #2484c4ff;
        --toastify-color-success: #06960bff;
        --toastify-color-warning: #de9f00ff;
        --toastify-color-error: #e12814ff;
    }

    html,body{
        padding: 0;
        margin: 0;
        width: 100dvw;
        height: 100dvh;

        background-image: url(${ImagemFundo});
        background-repeat: no-repeat;
        background-size: cover;
        
        ::-webkit-scrollbar{
            width: 10px;
        }

        ::-webkit-scrollbar-thumb{
            background-color:var(--verde-bambu-claro);

        }

        ::-webkit-scrollbar-track{
            background:rgba(255, 255, 255, 0.30);
            width: 0;
        }

        .Toastify__toast {
            padding: 1rem;
        }
    }

    label,
    span,
    th,
    tr,
    td,
    thead,
    tbody,
    input{
        font-family: "Lato", sans-serif;
        color: var(--preto-fosco);
    }

    input{
        padding: 0.9rem;
        padding-left: 10px;
        font-size: 16px;
        border: 0.4px solid var(--preto);
        outline: none;
    }

    button{
        padding: 0.9rem;
        &:disabled{
            background-color: var(--desativado);
            cursor: not-allowed;
            border-color: var(--cinza-escuro);

            &:hover{
                box-shadow:0px 0px 10px var(--cinza-escuro);
            }
        }        
    }

`

const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const pulsate = keyframes`
    0% {
        transform: scale(1);
    }
    25% {
        transform: scale(1.04);
    }
    50% {
        transform: scale(1.08);
    }
    75% {
        transform: scale(1.12);
    }
    100% {
        transform: scale(1.16);
    }
`;

export const KeyFrame = { rotation, pulsate }