import styled from "styled-components";

export const Nav = styled.div`
    background-color: white;
    padding: 1px;
`;

export const List = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
`;

export const Link = styled.a`
    color: #2c3e50;
    text-decoration: none;

    &:focus {
        outline: none;
    }

    &:hover {
        filter: brightness(120%);
        border-bottom: 1px solid #2c3e50;
        outline: none;
    }
`;