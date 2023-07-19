import styled from "styled-components";

export const Nav = styled.div`
    background-color: #2c3e50;
    padding: 1px;
    position: fixed ;
    width: 100%;
    z-index: 999;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 5fr;
    max-width: 1300px;
    margin: 0 auto;
`;

export const Img = styled.img`
    display: block;
    visibility: visible;
    width: 400px;
    height: max-content;
`;

export const Logo = styled.a`

`;

export const List = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding-left: 0;
`;

export const Link = styled.a`
    color: white;
    text-decoration: none;

    &:focus {
        outline: none;
    }

    &:hover {
        filter: brightness(120%);
        border-bottom: 1px solid white;
        outline: none;
    }
`;