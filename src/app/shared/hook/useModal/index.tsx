import { createContext, useContext, type ReactNode } from "react";

interface IModalProviverProps {
    children: ReactNode;
}

interface IModalContextData {

}

const ModalContext = createContext({} as IModalContextData);

function ModalProvider({
    children
}: IModalProviverProps){
    return(
        <ModalContext.Provider
            value={{

            }}
        >
            { children }
        </ModalContext.Provider>
    );
}

const useModal = () => {
    const context = useContext(ModalContext);

    return context;
}

export { ModalProvider, useModal }