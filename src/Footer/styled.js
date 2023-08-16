import styled from "styled-components";

export const Bottom = styled.footer`
    background-color: #2c3e50;
    color: #eee;
`;

export const Wrapper = styled.div`
    max-width: 1300px;
    padding: 20px;
    margin: 0 auto;
`;

export const Contact = styled.div`
    display: flex;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-direction: column;
    }
`;

export const Fb = styled.p`
    margin: 0;
    width: 40px;
`;

export const Img = styled.img`
    display: block;
    width: 40px;
`;

export const Adres = styled.p`
    margin-right: 20px;
`;

export const Kontakt = styled.p`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 0;
    }   
`;
export const Link = styled.a`
    color: #4c90f4;
`;