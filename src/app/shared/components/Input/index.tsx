import type { RefObject } from "react";
import { InputBase } from "./InputBase";
import type { TTamanhoDoCampo } from "../../global/types";

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>{
    ref?: RefObject<HTMLInputElement | null>;
    refTextArea?: RefObject<HTMLTextAreaElement | null>;
    descricaoLabel: string;
    value: string;
    tamanhoInput?: TTamanhoDoCampo;
    handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void
    refProximoItem?: React.RefObject<HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement | null>;
}

export const Input = {
    Base: InputBase
}