import styled from "styled-components";

export const Bottom = styled.footer`

`;

export const Wrapper = styled.div`
    max-width: 1300px;
    padding: 20px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2.5fr;
    grid-template-rows: 1.6fr 1fr;
`;
export const Segment = styled.div`
    max-width: 240px;
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
    color: ${({ theme }) => theme.color.font};
    &:hover {
        color: #4c90f4;
    }  
`;