
export const TypesEnter = ["Enter", "NumpadEnter"]

export type ITipoAcoes = 'cadastro' | 'visualizacao' | 'ambos'
export type AcaoDoBotao =   'partida' | 'jogador' | 'horario' | 'usuario' |
                            'tipo-usuario' | 'punicao' | 'forma-de-pagamento' | 'contas-a-receber'

export interface ISubItemAsideBar{
    nomeSubItem: string;
    tipoAcao: ITipoAcoes;
    acaoDoBotao: AcaoDoBotao;

}

export interface IConfiguracaoItemAsidebar{
    nomeItem: string;
    rotaRaiz?: string;
    subItem?: ISubItemAsideBar[]
}

export interface MappeadObject{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key:string] : any;
}

export type TTamanhoDoCampo = "pp" | "p"  | "m" | "g" | "full"

export interface ICamposFormProps{
    label: string;
    tamanhoCampo?: TTamanhoDoCampo;
    campoName: string;
    campoId?: string;
    placeholder?: string;
}

export interface IFormularioComponentProps{
    titulo?: string;
    possuiIconeVoltarTitulo: boolean;
    campos: ICamposFormProps[]
}

export interface ITokenDecodificadoProps {
    Id: string;
    TipoUsuarioId: string;
    nbf: number;
    exp: number;
    iat: number;
}

export interface IConfiguracaoTabelaProps{
    campo: string;
    codigo: string;
}

export interface ISelectAttProps extends MappeadObject {
    id: number;
    descricao: string;
}