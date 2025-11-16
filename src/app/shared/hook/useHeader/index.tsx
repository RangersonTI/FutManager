import { createContext, useContext, useState, type ReactNode } from "react";

interface IHeaderContextData{
    listaItensMenuEstaAberto: number[];
    setListaItensMenuEstaAberto: React.Dispatch<
        React.SetStateAction<number[]>
    >;
    handleAdicionarMenuAhListaAberta: (item: number) => void
    handleLimparListaItensAberto: () => void
}

interface IHeaderProviderProps{
    children: ReactNode;
}

const Header = createContext({} as IHeaderContextData);

function HeaderProvider({
    children
}: IHeaderProviderProps){

    const [
        listaItensMenuEstaAberto,
        setListaItensMenuEstaAberto
    ] = useState<number[]>([]);

    const handleAdicionarMenuAhListaAberta = (item: number) =>{
        if(listaItensMenuEstaAberto.includes(item))
            setListaItensMenuEstaAberto(listaItensMenuEstaAberto.filter((i) => i !==item));
        else
            setListaItensMenuEstaAberto((p) => ([...p,item]));
    }

    const handleLimparListaItensAberto = () => setListaItensMenuEstaAberto([]);

    return(
        <Header.Provider
            value={{
                listaItensMenuEstaAberto,
                setListaItensMenuEstaAberto,
                handleAdicionarMenuAhListaAberta,
                handleLimparListaItensAberto,
            }}
        >
            { children }
        </Header.Provider>
    );
}

const useHeader = () => {
    const context = useContext(Header);

    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { useHeader, HeaderProvider}