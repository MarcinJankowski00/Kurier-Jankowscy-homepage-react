import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
`;

export const List = styled.ul`
    list-style: none;
    padding: 10px;
    padding-top: 0%;
    font-size: smaller;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    margin-bottom: 97px;
`;

export const Button = styled.button`
    font-size: smaller;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    padding: 15px;
    margin-bottom: 4px;
    width: 200px;
    border: none;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        filter: brightness(110%);
        transform: scale(1.1);
    }

    &:active {
        box-shadow: 0px 0px 1px 1px #020202;
        filter: brightness(120%);
    }
`;

