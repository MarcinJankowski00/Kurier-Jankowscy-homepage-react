import styled from "styled-components";

export const Bottom = styled.footer`
    background-color: ${({ theme }) => theme.color.footerBackground};
    color: ${({ theme }) => theme.color.white};
`;

export const Contact = styled.div`
    display: flex;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-direction: column;
    }
`;

export const Adres = styled.p`
    margin-right: 20px;
`;

export const Kontakt = styled.p`
    margin-right: 20px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 0;
    }   
`;

export const Cookies = styled.p`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-top: 18px;
    }   
`;

export const Wrapper = styled.div`
    display: grid;
    padding: 30px 0;
    grid-template-columns: 1fr 1fr 1.5fr;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        grid-template-columns: 1fr;

    }   
`;
export const Segment = styled.div`
    max-width: 240px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        max-width: 193px;
        margin-bottom: 20px;
    }   
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Fb = styled.div`
    margin-top: 5px;
    width: 45px;
`;

export const Img = styled.img`
    display: block;
    width: 100%;
`;
export const Icon = styled.img`
    width: 30px;
    margin-right: 1px;
`;

export const Header = styled.h3`
    padding: 0;
    margin: 10px;
`;

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    padding-bottom: 2px;
`;

export const Link = styled.a`
    display: contents;
    text-decoration: none;
    transition: 0.2s;
    color: ${({ theme }) => theme.color.white};
    &:hover {
        color: #4c90f4;
    }  
`;