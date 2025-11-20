import type { IConfiguracaoTabelaProps, MappeadObject } from "../../global/types";
import { AgrupamentoTabela, Table, Tbody, Td, Tr, Thead, Th } from "./style";
import {
    EditIcon,
    DeleteIcon
} from "../../assets/";

export interface ITabelaProps {
    data: MappeadObject[];
    configuracaoTabela: IConfiguracaoTabelaProps[]
    handleObterMaisDados: () => Promise<void>;
    handleAcaoEditarDado: (objeto: MappeadObject) => void;
    handleAcaoDeletarDado: (objeto: MappeadObject) => void;
}

export const Tabela = ({
    data,
    configuracaoTabela,
    handleAcaoEditarDado,
    handleAcaoDeletarDado,
    handleObterMaisDados
}: ITabelaProps) => {
    return(
        <AgrupamentoTabela>
            <Table>
                <Thead>
                    <Tr>
                        {configuracaoTabela.map((config) => (
                            <Th> {config.campo} </Th>
                        ))}
                        <Th className="acoes"> Açoes</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((objeto) => (
                        <Tr>
                            {configuracaoTabela.map((config) => (
                                <Td>
                                    {objeto[config.codigo]}
                                </Td>
                            ))}
                            <Td>
                                <div className="acoes_body">
                                    <div className="editar_item" onClick={() => handleAcaoEditarDado(objeto)}>
                                        <img src={EditIcon} alt="Editar" />
                                    </div>
                                    <div className="deletar_item" onClick={() => handleAcaoDeletarDado(objeto)}>
                                        <img src={DeleteIcon} alt="Remover" />
                                    </div>
                                </div>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </AgrupamentoTabela>
    );
}