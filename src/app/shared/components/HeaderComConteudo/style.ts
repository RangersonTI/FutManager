import styled from "styled-components";

export const Header = styled.aside`
    height: 100vh;
    min-width: 300px;
    width: 20%;
    display: flex;
    flex-direction: column;

    overflow-y: auto;

    background-color: var(--verde);

    .user-identification {
        margin: 8px;
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

    .header-conteudo-itens{
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

export const Conteudo = styled.div`
    width: 100%;
    padding: 0.6rem;
`

export const MenuAgrupado = styled.div`
    label,svg{
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

    .subItens{
        justify-items: end;
        grid-gap: 0.5rem;

        .subItem{
            gap: 8px;
            display: flex;
            justify-items: center;
            font-size: 1.15rem;
            font-weight: 800;
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