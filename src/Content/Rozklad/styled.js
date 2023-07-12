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
    font-size: 20px;
    width: 100%;
`;

export const Cell = styled.td`
    border: 1px solid #e6e6e6;
    background-color: #f8f7f7;
    padding: 8px;
    text-align: center;

    ${({ header }) => header && css`
        background-color: #c0c0c0;
        font-weight: bold;
        text-align: start;
    `}
`;