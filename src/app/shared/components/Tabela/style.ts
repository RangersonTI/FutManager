import styled from "styled-components";

export const AgrupamentoTabela = styled.section`
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Table = styled.table`
    width: 90%;
    background-color: var(--branco);
    border: 1px solid var(--verde-bambu);
    border-radius: 5px;
`;

export const Th = styled.th`
    font-size: 1.3rem;
    font-weight: 800;
    margin: 3px;
`;

export const Tr = styled.tr``;

export const Td = styled.td``;

export const Thead = styled.thead`
    th{
        background-color: var(--verde);
        border: none;
        color: var(--branco);
        padding: 0.8rem;
    }

    .acoes {
        width: 90px;
    }
`;
export const Tbody = styled.tbody`
    td {
        font-size: 1rem;
        text-align: center;
        padding: 0.4rem 0.6rem;
    }
    >:nth-child(even){
        background-color: var(--verde-bambu-claro);
    }

    .acoes_body{
        display: flex;
        justify-content: center;
        gap: 6px;
    
        img {
            width: 28px;
            cursor: pointer;
        }
    }
`;