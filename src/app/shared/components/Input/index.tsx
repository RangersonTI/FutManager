import type { RefObject } from "react";
import { InputBase } from "./InputBase";

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>{
    ref?: RefObject<HTMLInputElement | null>;
    refTextArea?: RefObject<HTMLTextAreaElement | null>;
    descricaoLabel: string;
    value: string;
    setValue: React.Dispatch<
        React.SetStateAction<string>
    >;
    refProximoItem?: React.RefObject<HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement | null>;
}

export const Input = {
    Base: InputBase
}