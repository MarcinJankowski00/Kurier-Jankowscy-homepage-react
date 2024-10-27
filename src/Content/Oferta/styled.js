import styled from "styled-components";

export const Container = styled.div`
    justify-items: center;
    font-size: 22px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        font-size: 18px;
    }
`;

export const Content = styled.div`
    text-align: justify;
    max-width: 1100px;
`;

export const Segment = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 60px 0;
    max-width: 1100px;
    text-align: start;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        margin: 20px 0;

    }
`;

export const Wrapper = styled.div`
    max-width: 540px;
`;

export const Image = styled.img`
    max-width: 440px;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
    margin: 0 30px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        display: none;
    }
`;