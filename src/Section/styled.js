import styled from "styled-components";

export const Segment = styled.section`
    margin: 50px 0px;
`;

export const Header = styled.h2`
    font-size: 32px;
    align-items: center;
    border-bottom: 2px solid ${({ theme }) => theme.color.sectionShadow};
    padding: 20px;
    margin: 0;
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 25px;
    }
`;

export const Title = styled.h2`
    margin: 0;
    text-align: start;
    font-weight: normal;
`;

export const Content = styled.div`
    padding: 20px;
`;
