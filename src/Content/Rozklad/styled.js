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
    background-color: ${({ theme }) => theme.color.tableBackgroud};
    width: 100%;
    font-size: 19px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 15px;
        }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
            font-size: 13px;
        }
`;

export const Cell = styled.td`
    border: 2px solid ${({ theme }) => theme.color.tableBorder};
    padding: 8px;
    text-align: center;

    ${({ header }) => header && css`
        background-color: ${({ theme }) => theme.color.tableHeader};
        font-weight: bold;
        white-space: nowrap;
    `}
    ${({ name }) => name && css`
        text-align: start;
    `}
`;
export const Row = styled.tr`
    &:hover {
        background-color: ${({ theme }) => theme.color.tableHover};
    }
`;