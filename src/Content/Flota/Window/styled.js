import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr;

`;

export const Photo = styled.div`
    width: 100%;
    height: 100%;
`;

export const Title = styled.h2`
    text-align: center;
`;

export const Info = styled.ul`
    list-style: none;
    padding: 10px;
    padding-top: 0%;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    margin-bottom: 97px;
    text-align: center;
`;

export const Item = styled.li`
    margin-top: 10px;
    margin-bottom: 10px;
    padding-bottom: 3px;
    width: 200px;
    border-bottom: 1px solid #2c3e50;
`;

export const Content = styled.span`

`;