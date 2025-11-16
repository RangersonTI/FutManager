import { useCallback } from "react";
import type { IInput } from "..";
import { StyledInput } from "./style";
import { TypesEnter } from "../../../global/types";

export const InputBase = ({
    value,
    handleChangeValue,
    refProximoItem,
    descricaoLabel,
    ref,
    tamanhoInput = 'full',
    ...rest
}: IInput) =>{

    const handleExecutarComandoKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            const { code } = e;

            if(TypesEnter.includes(code) && refProximoItem?.current)
                return refProximoItem.current.focus();

        },[
            refProximoItem
        ]
    )

    return(
        <StyledInput
            $tamanhoInput={tamanhoInput}
        >
            <label>{descricaoLabel}</label>
            <input
                ref={ref}
                onKeyDown={handleExecutarComandoKeyDown}
                onChange={handleChangeValue}
                value={value}
                {...rest}
            />
        </StyledInput>
    );
}