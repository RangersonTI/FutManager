import type { ReactNode } from "react"
import { ContainerElement } from "./style";

interface IContainerProps{
    children: ReactNode;
}

export const Container = ({
    children
}:IContainerProps) =>{
    return(
        <ContainerElement>
            {children}
        </ContainerElement>
    );
}