import styled from "styled-components";

export const Container = styled.div`
    font-size: 20px;
`;

export const Heading = styled.div`
    font-size: 20px;
`;

export const List = styled.ul`
    list-style: none;
    padding-inline-start: 0;
    padding-left: 15px;
    padding-right: 15px;
`;

export const Item = styled.li`
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    border-bottom: 2px solid ${({ theme }) => theme.color.alto};
    padding: 10px;
`;

export const Span = styled.span`
    color: gray;
`;
