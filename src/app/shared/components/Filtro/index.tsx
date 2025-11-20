import { Grid } from "@mui/material";
import { Button } from "../Button";
import { Input } from "../Input";
import { ContainerFiltro } from "./style";

interface IFiltroProps{
    placeholder: string;
    valueFiltro: string;
    setValueFiltro: React.Dispatch<
        React.SetStateAction<string>
    >
    valueTipoFiltro: string;
    setValueTipoFiltro: React.Dispatch<
        React.SetStateAction<string>
    >
    acaoBotaoBuscar: () => void;
    acaoBotaoCadastrar: () => void;
}

export const Filtro = ({
    placeholder,
    valueFiltro,
    setValueFiltro,
    acaoBotaoBuscar,
    acaoBotaoCadastrar
}: IFiltroProps) => {

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        setValueFiltro(value);
    }

    return(
        <div style={{width: "100%", justifyItems: "center"}}>
            <ContainerFiltro>
                <Input.Base
                    descricaoLabel={"Filtro"}
                    handleChangeValue={handleChangeValue}
                    value={valueFiltro}
                    placeholder={placeholder}
                />

                <Input.Base
                    descricaoLabel={"Tipo de Filtro"}
                    handleChangeValue={()=>{}}
                    value=""
                />

                <Button
                    botaoContainerFiltro
                    onClick={acaoBotaoBuscar}
                    descricaoBotao="Buscar"
                    flex
                />

                <Button
                    botaoContainerFiltro
                    tipoBotao="cadastrar"
                    descricaoBotao="Cadastrar"
                    onClick={acaoBotaoCadastrar}
                    flex
                />
            </ContainerFiltro>
        </div>
    );
}