import styled, { css } from "styled-components";

export const Container = styled.div`
    font-size: 20px;
`;

export const Heading = styled.div`
    text-align: center;
    font-size: 20px;
    margin-top: 10px;
    ${({ empty }) => empty && css`
        margin-top: 6px;
    `}
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
    }
`;

export const ListContainer = styled.div`
    padding: 0;
    margin: 0;
`;

export const List = styled.ul`
    list-style: none;
    padding-inline-start: 0;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 0;
    margin-bottom: 0;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 17px;
    }
    
`;

export const Item = styled.li`
    border-bottom: 2px solid ${({ theme }) => theme.color.alto};
    padding: 10px;
    text-align: center;
`;

export const Span = styled.span`
    color: gray;
`;

export const Div = styled.div`
    text-align: center;
    margin: 0;
    padding: 0;
`;
