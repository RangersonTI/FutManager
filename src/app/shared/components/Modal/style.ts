import styled from "styled-components";

interface IModalStyled{
    width?: string;
    height?: string;
}

export const ModalStyled = styled.div<IModalStyled>`
    height: ${p => p.height};
    width: ${p => p.height};
`;