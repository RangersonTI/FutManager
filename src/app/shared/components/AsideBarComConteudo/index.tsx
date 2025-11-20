import { memo, useMemo, type ReactNode } from "react";
import { Container } from "../Container";
import { 
    AsideBar,
    Conteudo,
    MenuAgrupado,
    MenuHamburguer,
    Sair
} from "./style";
import { 
    Avatar,
    useMediaQuery,
    useTheme,
    type SxProps
} from "@mui/material";
import { ConfiguracaoAsideBar } from "../../global/asidebar";
import { CaretDownIcon, CaretRightIcon, EyeIcon, PlusSquareIcon, SignOutIcon } from '@phosphor-icons/react';

import { useAsideBar } from "../../hook/useAsideBar";
import { useNavigate } from "react-router-dom";
import type { IConfiguracaoItemAsidebar, ISubItemAsideBar } from "../../global/types";
import { Redirecionar } from "../../function/Redirecionar";
import {
    CloseIcon,
    MenuIcon
} from "../../assets";

interface IAsideBarComConteudoProps{
    children: ReactNode;
}

const style: SxProps = {
    bgcolor: "#fff",
    color: "#000",
    border: "2px solid",
    fontFamily: "'Modular Amplitude', sans-serif",
    fontSize: "30px"
}

export const AsideBarComConteudo = ({
    children
} : IAsideBarComConteudoProps) =>{

    const {
        handleAdicionarMenuAhListaAberta,
        handleLimparListaItensAberto,
        listaItensMenuEstaAberto,
        asideBarEstaAberto,
        setAsideBarEstaAberto
    } = useAsideBar();
    
    const navigate = useNavigate();

    const theme = useTheme();

    const larguraPaginaEhSuficiente = useMediaQuery(theme.breakpoints.up(1280));

    const handleVerificarItemPossuiSubItens = (
        item: IConfiguracaoItemAsidebar, k: number
    ) => {
        const { rotaRaiz, subItem } = item;

        if((!subItem || subItem.length == 0) && rotaRaiz){
            handleLimparListaItensAberto()            
            return navigate(rotaRaiz)
        }
        else
            handleAdicionarMenuAhListaAberta(k)

    }

    const handleNavegar = (item: ISubItemAsideBar) =>{

        if(item.tipoAcao === "visualizacao" || item.tipoAcao === "ambos")
            navigate(`/${item.acaoDoBotao}`);
        else
            navigate(`/${item.acaoDoBotao}/cadastrar`);

        handleLimparListaItensAberto();
    }

    const handleAbrirOuFecharAsideBar = () =>
        setAsideBarEstaAberto(!asideBarEstaAberto)

    const handleFecharAsiderBar = () => {
        if(
            !larguraPaginaEhSuficiente &&
            asideBarEstaAberto
        )
         setAsideBarEstaAberto(false);
    }

    const BotaoSair = memo(
        () => {
            return(
                <Sair 
                    className="botao-sair"
                    onClick={() => Redirecionar.paraLogin()}
                >
                    <span>
                        <SignOutIcon size={26} weight="bold" />
                        {asideBarEstaAberto && <label>SAIR</label>}
                    </span>
                </Sair>
            );
        }
    );

    // RESPONSAVEL POR MANTER A NAVEGAÇÃO LATERAL SEMPRE ABERTA
    const asideBarHabilitado: boolean = useMemo(
        () => 
            asideBarEstaAberto ||
            larguraPaginaEhSuficiente
        
        ,[
            larguraPaginaEhSuficiente,
            asideBarEstaAberto
        ]
    );
    
    // HABILITA O BOTAO ABRIR DO MENU "HAMBURGUER" PARA ABRIR A ASIDEBAR
    const botaoAbrirAsideBarHabilitada: boolean = useMemo(
        () => 
            !asideBarEstaAberto
        ,[
            asideBarEstaAberto
        ]
    );

    // HABILITA O BOTAO FECHAR DO MENU "HAMBURGUER" PARA ABRIR A ASIDEBAR
    const botaoFecharAsideBarHabilitada: boolean = useMemo(
        () => 
            asideBarEstaAberto
        ,[
            asideBarEstaAberto
        ]
    );

    // HABILITA O MENU "HAMBURGUER" PARA AÇOES
    const menuHamburgerHabilitado: boolean = useMemo(
        () => 
            !larguraPaginaEhSuficiente
        ,[
            larguraPaginaEhSuficiente
        ]
    );

    return(
        <Container>
            <div id="asidebar-e-conteudo">
                <MenuHamburguer 
                    $asiderBarEstaAberta={asideBarEstaAberto}
                >
                    {asideBarHabilitado && (
                        <AsideBar className="asidebar">
                            <div className="user-identification">
                                <div className="div-avatar">
                                    <Avatar sx={style}>K</Avatar>
                                </div>
                                <h1> Bem-Vindo, Kezio </h1>
                            </div>
                            <div className="asidebar-conteudo-itens">
                                {ConfiguracaoAsideBar.map((item,k) =>(
                                    <MenuAgrupado>
                                        <div
                                            className={`item ${k} ${!item.subItem && 'disableCaret'}`}
                                            onClick={() =>handleVerificarItemPossuiSubItens(item,k)}
                                        >
                                            {listaItensMenuEstaAberto.includes(k)
                                                ? <CaretDownIcon size={32} weight="fill"/> 
                                                : <CaretRightIcon size={32} weight="fill"/> 
                                            }
                                            <label>{item.nomeItem}</label>
                                        </div>
                                        {
                                            listaItensMenuEstaAberto.includes(k) && 
                                            item.subItem &&
                                            (
                                            <div className={`subItens item-${k}`}>
                                                {item.subItem.map((subItem) =>(
                                                    <div className="subItem" onClick={() => handleNavegar(subItem)}>
                                                        {subItem.tipoAcao === "cadastro"
                                                            ? <PlusSquareIcon size={26} weight="bold"/>
                                                            : subItem.tipoAcao === "visualizacao"
                                                                ?<EyeIcon size={26} weight="bold" />
                                                                :<></>
                                                        }
                                                        <label>{subItem.nomeSubItem}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </MenuAgrupado>
                                ))}
                            </div>
                            <BotaoSair/>
                        </AsideBar>
                    )}
                    {menuHamburgerHabilitado && (
                        <section id="section-menu-hamburguer">
                            <div className="botao-de-acoes">
                                {botaoAbrirAsideBarHabilitada && (
                                    <img 
                                        src={MenuIcon}
                                        alt="Abrir Menu"
                                        onClick={handleAbrirOuFecharAsideBar}
                                    />
                                )}

                                {botaoFecharAsideBarHabilitada && (
                                    <img 
                                        src={CloseIcon}
                                        alt="Fechar Menu"
                                        onClick={handleAbrirOuFecharAsideBar}
                                    />
                                )}
                            </div>
                            {!asideBarEstaAberto && (<BotaoSair/>)}
                        </section>
                    )}
                </MenuHamburguer>
                <Conteudo onClick={handleFecharAsiderBar} className="conteudo">
                    {children}
                </Conteudo>
            </div>
        </Container>
    );
}