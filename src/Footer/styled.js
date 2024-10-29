import styled from "styled-components";

export const Bottom = styled.footer`
    background-color: ${({ theme }) => theme.color.footerBackground};
    color: ${({ theme }) => theme.color.white};
    font-size: 22px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 20px;
    }   
`;

export const CallToAction = styled.div`
    margin: 20px 0 40px;
    max-width: 800px;
    font-weight: bold;
    font-size: 44px;
    border-bottom: 1px solid ${({ theme }) => theme.color.white};
    padding-bottom: 20px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        font-size: 32px;
        padding-bottom: 15px;
        margin: 10px 0 20px;
    }  
`;

export const Contact = styled.div`
    display: flex;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-direction: column;
    }
`;

export const Cookies = styled.p`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-top: 18px;
    }   
`;

export const Wrapper = styled.div`
    display: grid;
    grid-column-gap:  80px;
    margin: 40px 0;
    grid-template-columns: auto auto 1fr;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        grid-template-columns: 1fr;
        margin: 30px 0;
    }   
`;
export const Segment = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
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
    margin: 0 0 0 10px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 20px;
    }  
`;

export const List = styled.ul`
    list-style: none;
    margin: 0;
    margin-top: 10px ;
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
    transition: 0.3s;
    color: ${({ theme }) => theme.color.white};
    &:hover {
        color: ${({ theme }) => theme.color.blue}
    }  
`;

export const SocialLink = styled.a`
    display: inline-block;
    transition: transform 0.3s;
    width: 50px;
    margin: 0 5px;

    &:hover {
        transform: scale(1.1);
    }

    svg {
        fill: ${({ theme }) => theme.color.white};
        transition: fill 0.3s ease;

        &:hover {
            fill: ${({ theme }) => theme.color.blue};
        }
    }
`;