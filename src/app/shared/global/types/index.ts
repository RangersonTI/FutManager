
export const TypesEnter = ["Enter", "NumpadEnter"]

export type ITipoAcoes = 'cadastro' | 'visualizacao' | 'ambos'
export type AcaoDoBotao =   'partida' | 'jogador' | 'horario' | 'usuario' |
                            'tipo-usuario' | 'punicao' | 'forma-de-pagamento' | 'contas-a-receber'

export interface ISubItemHeader{
    nomeSubItem: string;
    tipoAcao: ITipoAcoes;
    acaoDoBotao: AcaoDoBotao;

}

export interface IConfiguracaoItemHeader{
    nomeItem: string,
    subItem: ISubItemHeader[]
}

export interface MappeadObject{
    [key:string] : any;
}

export interface ICamposFormProps{
    label: string;
    campoName: string;
    campoId?: string;
    placeholder?: string;
}

export interface IFormularioComponentProps{
    titulo?: string;
    possuiIconeVoltarTitulo: boolean;
    campos: ICamposFormProps[]
}