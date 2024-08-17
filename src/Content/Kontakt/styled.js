import styled from "styled-components";

export const Bottom = styled.footer`

`;

export const Wrapper = styled.div`
    max-width: 1300px;
    padding: 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;
export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const Fb = styled.p`
    margin: 0;
    width: 40px;
`;

export const Img = styled.img`
    display: block;
    width: 30px;
`;
export const Icon = styled.img`
    width: 30px;
    margin-right: 10px;
`;

export const Header = styled.h3`

`;

export const Link = styled.a`
    display: contents;
    text-decoration: none;
    transition: 0.2s;
    color: ${({ theme }) => theme.color.font};
    &:hover {
        color: #4c90f4;
    }  
`;