import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root{
        --azulado-fraco:#dee8ff;
        --azulado-medio: #BED2FF;
        --azulado-forte: #A8C2FF;
        --azul-claro: #9BBAFF;
        --azul-medio: #76A1FF;

        --verde-menta-claro: #CBF4CB;
        --verde-bambu-claro:rgb(130, 199, 130);
        --verde-bambu: #6FAA6F;
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
    }

    html,body{
        padding: 0;
        margin: 0;

        width: 100dvw;
        height: 100dvh;

        background: linear-gradient(to bottom,
            var(--verde-menta-claro) 20%,
            var(--verde-bambu-claro) 80%,
            var(--verde-escuro) 95%
        );

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
        height: 35px;
        font-size: 16px;
        border: 0.4px solid var(--preto);
    }

    button{

        &:disabled{
            background-color: var(--desativado);
            cursor: not-allowed;
        }        
    }

`