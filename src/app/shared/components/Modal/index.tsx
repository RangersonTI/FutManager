
import type { RefObject } from "react";
import type React from "react";

export interface IModalProps extends React.HTMLAttributes<HTMLDivElement>{
    ref?: RefObject<HTMLDivElement | null>
}

export const Modal = ({
    ref,
    ...rest
} : IModalProps) =>{
    return(
        <div
            ref={ref}
            {...rest}
        >
            Olá
        </div>
    );
}