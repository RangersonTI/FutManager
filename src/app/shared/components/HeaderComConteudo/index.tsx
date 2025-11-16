import { type ReactNode } from "react";
import { Container } from "../Container";
import { Conteudo, Header, MenuAgrupado, Sair } from "./style";
import { Avatar, type SxProps } from "@mui/material";
import { ConfiguracaoHeader } from "../../global/headers";
import { CaretDownIcon, CaretRightIcon, EyeIcon, PlusSquareIcon, SignOutIcon } from '@phosphor-icons/react';

import { useHeader } from "../../hook/useHeader";
import { useNavigate } from "react-router-dom";
import type { IConfiguracaoItemHeader, ISubItemHeader } from "../../global/types";
import { Redirecionar } from "../../function/Redirecionar";

interface IHeaderComConteudoProps{
    children: ReactNode;
}

const style: SxProps = {
    bgcolor: "#fff",
    color: "#000",
    border: "2px solid",
    fontFamily: "'Modular Amplitude', sans-serif",
    fontSize: "30px"
}

export const HeaderComConteudo = ({
    children
} : IHeaderComConteudoProps) =>{

    const {
        handleAdicionarMenuAhListaAberta,
        listaItensMenuEstaAberto,

        usuarioLogado
    } = useHeader();
    
    const navigate = useNavigate();

    const handleVerificarItemPossuiSubItens = (
        item: IConfiguracaoItemHeader, k: number
    ) => {
        const { rotaRaiz, subItem } = item;

        if((!subItem || subItem.length == 0) && rotaRaiz)
            navigate(rotaRaiz)
        else
            handleAdicionarMenuAhListaAberta(k)

    }

    const handleNavegar = (item: ISubItemHeader) =>{

        if(item.tipoAcao === "visualizacao" || item.tipoAcao === "ambos")
            return navigate(`/${item.acaoDoBotao}`)
        else
            return navigate(`/${item.acaoDoBotao}/cadastrar`)
    }

    return(
        <Container>
            <div id="header-e-conteudo">
                <Header className="header">
                    <div className="user-identification">
                        <div className="div-avatar">
                            <Avatar sx={style}>{usuarioLogado[0]}</Avatar>
                        </div>
                        <h1> Bem-Vindo, {usuarioLogado} </h1>
                    </div>
                    <div className="header-conteudo-itens">
                        {ConfiguracaoHeader.map((item,k) =>(
                            <MenuAgrupado>
                                <div
                                    className={`item ${k} ${!item.subItem && 'disableCaret'}`}
                                    onClick={() =>handleVerificarItemPossuiSubItens(item,k)}
                                >
                                    {/* {item.subItem && (
                                        <> */}
                                            {listaItensMenuEstaAberto.includes(k)
                                                ? <CaretDownIcon size={32} weight="fill"/> 
                                                : <CaretRightIcon size={32} weight="fill"/> 
                                            }
                                        {/* </>
                                    )} */}
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
                    <Sair 
                        className="botao-sair"
                        onClick={() => Redirecionar.paraLogin()}
                    >
                        <span>
                            <SignOutIcon size={26} weight="bold" />
                            <label>SAIR</label>
                        </span>
                    </Sair>
                </Header>
                <Conteudo className="conteudo">
                    {children}
                </Conteudo>
            </div>
        </Container>
    );
}