import { useEffect, useState } from "react";
import { AsideBarComConteudo } from "../../shared/components/AsideBarComConteudo";
import { Tabela } from "../../shared/components/Tabela";
import { toast } from "react-toastify";
import { obterMensagemDeErro } from "../../shared/services/Api";
import { UsuarioController } from "../../shared/services/UsuarioController";
import type { IGetUsuarioData } from "../../shared/services/UsuarioController/metodos/Get";
import { ConfiguracaoTabela } from "../../shared/global/table";
import { ContainerGerencial } from "../../shared/components/ContainerGerencial";
import { Filtro } from "../../shared/components/Filtro";

export const Usuario = () => {

    const [
        paginaAtual,
        setPaginaAtual
    ] = useState(1);

    const [
        filtro,
        setFiltro
    ] = useState("");

    const [
        usuarios,
        setUsuarios
    ] = useState<IGetUsuarioData[]>([]);

    const handleObterUsuarios = async() => {
        try {
            const usrs = await UsuarioController.Get(
                paginaAtual
            );

            setUsuarios([
                ...usuarios,
                ...usrs
            ]);
        }
        catch (error) {
            toast.error(obterMensagemDeErro(error));    
        }
    }

    useEffect(
        () => {
            handleObterUsuarios();
        },[]
    );

    return(
        <AsideBarComConteudo>
            <ContainerGerencial
                descricao={"Gerenciamento de Usuários"}
            >
                <Filtro
                    placeholder="Busque pelo ID, Nome, email ou Tipo de Usuario!"
                    valueFiltro={filtro}
                    setValueFiltro={setFiltro}
                    valueTipoFiltro={""}
                    setValueTipoFiltro={setFiltro}
                    acaoBotaoBuscar={()=>{}}
                    acaoBotaoCadastrar={()=>{
                        toast.warn("Cadastrado!")
                        toast.info("Cadastrado!")
                        toast.error("Cadastrado!")
                        toast.success("Cadastrado!")
                    }}
                />
                <Tabela
                    data={usuarios}
                    configuracaoTabela={ConfiguracaoTabela.Usuarios}
                    handleObterMaisDados={async() => {}}
                    handleAcaoEditarDado={()=>{}}
                    handleAcaoDeletarDado={()=>{}}
                />
            </ContainerGerencial>
        </AsideBarComConteudo>
    );
}