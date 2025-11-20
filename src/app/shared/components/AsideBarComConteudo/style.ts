import styled, { css } from "styled-components";
import { KeyFrame } from "../../global/style";

interface IMenuHambugerProps {
    $asiderBarEstaAberta: boolean;
}

export const AsideBar = styled.aside`
    height: 100vh;
    min-width: 350px;
    width: 20%;
    display: flex;
    flex-direction: column;
    user-select: none;

    overflow-y: auto;

    background-color: var(--verde);

    .user-identification {
        margin: 8px;
        border-radius: 6px;
        background-color: var(--branco);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 5rem;

        h1{
            font-family: 'Modular Amplitude', sans-serif;
            font-weight: 200;
            padding: 1rem;
            font-size: 1.4rem;
        }

        .div-avatar{
            width: 80px;
            display: flex;
            justify-content: center;
        }
    }

    .asidebar-conteudo-itens{
        padding: 1rem 0;
        flex-direction: column;
        flex: 1;
    }

    .logo{
        justify-items: center;
        align-items: center;
        min-width: 50px;
    }
`

export const MenuHamburguer = styled.div<IMenuHambugerProps>`
    display: flex;
    height: 100dvh;

    #section-menu-hamburguer{
        background-color: var(--verde);
        width: 50px;
        padding: 0.7rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .botao-de-acoes {
            display: flex;
            justify-content: center;
            img {
                width: 44px;
            }
        }

        img:hover {
            transition: animation;
            animation: ${KeyFrame.pulsate} 0.5s forwards;
            cursor: pointer;
        }
    }

    @media (max-width:1280px) {
        ${p => p.$asiderBarEstaAberta &&
            css`
                position: fixed;
            `
        }
    }
`

export const Conteudo = styled.div`
    width: 100%;
    padding: 0.6rem;
    overflow: auto;
`

export const MenuAgrupado = styled.div`
    label,
    svg{
        color: var(--branco);
        cursor: pointer;
    }

    .item{
        padding: 1rem 0.6rem;
        display: flex;
        gap: 8px;
        
        label{
            font-size: 1.5rem;
            font-weight: 800;
        }
        
    }

    .disableCaret {
        svg {
            color: transparent;
        }
    }

    .subItens{
        justify-items: end;
        grid-gap: 0.5rem;

        .subItem{
            gap: 8px;
            display: flex;
            justify-items: center;
            font-size: 1.15rem;
            font-weight: 700;
            width: 85%;
            padding: 0.4rem;

            &:hover{
                label,svg{
                    color: var(--branco);
                    cursor: pointer;
                    transform: scale(1.07);
                    transition: transform 0.7s ease, color 0.2s ease;
                    transform-origin: left right;
                }

                padding: 0.7rem;
                background-color: var(--verde-escuro);
            }
        }
    }

    &:hover {
        background-color: var(--verde-escuro);
    }
`

export const Sair = styled.div`
    width: 100%;

    span{
        padding: 1rem;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 1rem;
        font-weight: 800;
    }
    
    span,label{
        color: var(--branco);
    }

    &:hover{
        cursor: pointer;
        background-color: var(--vermelho);
    }
`