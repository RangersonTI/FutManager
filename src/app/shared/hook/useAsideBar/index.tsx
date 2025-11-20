import { createContext, useContext, useState, type ReactNode } from "react";

interface IAsideBarContextData{
    listaItensMenuEstaAberto: number[];
    setListaItensMenuEstaAberto: React.Dispatch<
        React.SetStateAction<number[]>
    >;
    handleAdicionarMenuAhListaAberta: (item: number) => void
    handleLimparListaItensAberto: () => void

    asideBarEstaAberto: boolean;
    setAsideBarEstaAberto: React.Dispatch<
        React.SetStateAction<boolean>
    >;
}

interface IAsideBarProviderProps{
    children: ReactNode;
}

const AsideBar = createContext({} as IAsideBarContextData);

function AsideBarProvider({
    children
}: IAsideBarProviderProps){

    const [
        listaItensMenuEstaAberto,
        setListaItensMenuEstaAberto
    ] = useState<number[]>([]);

    const [
        asideBarEstaAberto,
        setAsideBarEstaAberto
    ] = useState(true);

    const handleAdicionarMenuAhListaAberta = (item: number) =>{
        if(listaItensMenuEstaAberto.includes(item))
            setListaItensMenuEstaAberto(listaItensMenuEstaAberto.filter((i) => i !==item));
        else
            setListaItensMenuEstaAberto((p) => ([...p,item]));
    }

    const handleLimparListaItensAberto = () => {
        setListaItensMenuEstaAberto([]);
        setAsideBarEstaAberto(false);
    };

    return(
        <AsideBar.Provider
            value={{
                listaItensMenuEstaAberto,
                setListaItensMenuEstaAberto,
                handleAdicionarMenuAhListaAberta,
                handleLimparListaItensAberto,
                asideBarEstaAberto,
                setAsideBarEstaAberto
            }}
        >
            { children }
        </AsideBar.Provider>
    );
}

const useAsideBar = () => {
    const context = useContext(AsideBar);

    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { useAsideBar, AsideBarProvider}