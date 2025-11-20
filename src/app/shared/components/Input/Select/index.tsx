import type { ISelectAttProps } from "../../../global/types";
import { StyledSelect } from "./style";

interface ISelectProps extends React.HTMLAttributes<HTMLSelectElement>{
    items: ISelectAttProps[];
    value: ISelectAttProps;
    handleChangeValue: (value: React.ChangeEvent<HTMLSelectElement>) => void,
    descricaoLabel: string;
}

export const Select = ({
    items,
    value,
    handleChangeValue,
    descricaoLabel,
    ...rest
}: ISelectProps) => {
    return(
        <StyledSelect>
            <label>{ descricaoLabel }</label>
            <select
                {...rest}
                name=""
                id=""
                onChange={handleChangeValue}
            >
                {items.map((item) => (
                    <option
                        value={item.id}
                    >
                        { item.descricao }
                    </option>
                ))}
            </select>
        </StyledSelect>
    );
}