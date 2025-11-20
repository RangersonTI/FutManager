import type { ReactNode } from "react";
import { Titulo } from "./style";

export interface IContainerGerencialProps {
    descricao: string;
    children: ReactNode;
}

export const ContainerGerencial = ({
    descricao,
    children
}: IContainerGerencialProps) => {
    return(
        <>
            <Titulo>
                <span>{ descricao }</span>
            </Titulo>
            { children }
        </>
    );
}