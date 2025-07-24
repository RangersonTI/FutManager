import { createContext, useContext, useState, type ReactNode } from "react";

interface IHeaderContextData{
    listaItensMenuEstaAberto: number[];
    setListaItensMenuEstaAberto: React.Dispatch<
        React.SetStateAction<number[]>
    >;
    handleAdicionarMenuAhListaAberta: (item: number) => void

    usuarioLogado: string
}

interface IHeaderProviderProps{
    children: ReactNode;
}

const Header = createContext({} as IHeaderContextData);

function HeaderProvider({
    children
}: IHeaderProviderProps){

    const usuarioLogado = "Kezio";

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

    return(
        <Header.Provider
            value={{
                listaItensMenuEstaAberto,
                setListaItensMenuEstaAberto,
                handleAdicionarMenuAhListaAberta,

                usuarioLogado
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