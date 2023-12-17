import styled from "styled-components";

export const Nav = styled.div`
    background-color: ${({ theme }) => theme.color.navigation};
    padding: 1px;
    position: fixed ;
    width: 100%;
    z-index: 998;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 5fr;
    max-width: 1300px;
    margin: 0 auto;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            display: flex;
        }
`;

export const Img = styled.img`
    display: block;
    visibility: visible;
    width: 300px;
    height: max-content;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
            width: 280px;
        }
`;

export const Logo = styled.a`
    margin-top: 3px;
    margin-right: 100px;
    margin-left: 50px;
    cursor: pointer;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            margin: auto;
            margin-top: 15px;
            margin-bottom: 15px;
        }
`;

export const List = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding-left: 0;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            display: none;
        }
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.color.font};
    text-decoration: none;

    &:focus {
        outline: none;
    }
    &:hover {
        filter: brightness(120%);
        padding-bottom: 5px;
        border-bottom: 1px solid ${({ theme }) => theme.color.font};
        outline: none;
    }
`;