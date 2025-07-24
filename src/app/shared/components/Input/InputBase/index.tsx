import { useCallback } from "react";
import type { IInput } from "..";
import { StyledInput } from "./style";
import { TypesEnter } from "../../../global/types";

export const InputBase = ({
    value,
    setValue,
    refProximoItem,
    descricaoLabel,
    ref,
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
        <StyledInput>
            <label>{descricaoLabel}</label>
            <input
                ref={ref}
                onKeyDown={handleExecutarComandoKeyDown}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                {...rest}
            />
        </StyledInput>
    );
}