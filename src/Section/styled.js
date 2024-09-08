import styled from "styled-components";

export const Segment = styled.section`
    margin: 80px 0 180px 0;
    padding-top: 30px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        padding-top: 20px;
        margin-top: 40px;
    }
`;

export const Header = styled.div`
    font-size: 32px;
    align-items: center;
    padding-bottom: 5px;
    border-bottom: 1px solid ${({ theme }) => theme.color.headerUnderline};
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
    padding-top: 20px;
    margin-top: 20px;
`;
