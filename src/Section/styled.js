import styled from "styled-components";

export const Segment = styled.section`
    margin: 50px 0px;
    background-color: ${({ theme }) => theme.color.section};
    box-shadow: 0px 0px 5px 4px ${({ theme }) => theme.color.sectionShadow};
    border-radius: 8px;
`;

export const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;
    align-items: center;
    border-bottom: 2px solid ${({ theme }) => theme.color.sectionShadow};
    padding: 20px;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    margin: 0;
    text-align: center;
`;

export const Content = styled.div`
    padding: 20px;
`;
