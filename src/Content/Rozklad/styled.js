import styled, { css } from "styled-components";

export const Content = styled.div`
    text-align: center;
`;

export const Text = styled.div`
    text-align: start;
`;

export const TableContainer = styled.div`
    overflow-x: auto;
`;

export const Table = styled.table`
    border-collapse: collapse;
    background-color: #f8f7f7;
    font-size: 20px;
    width: 100%;
`;

export const Cell = styled.td`
    border: 2px solid #d9d9d9;
    padding: 8px;
    text-align: center;

    ${({ header }) => header && css`
        background-color: #c0c0c0;
        font-weight: bold;
        text-align: start;
    `}
`;
export const Row = styled.tr`
    &:hover {
        background-color: #eeeeee;
    }
`;