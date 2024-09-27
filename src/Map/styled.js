import styled from "styled-components";

export const Content = styled.iframe`
    width: 100%;
    height: 350px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
            height: 350px;
        }

`;
export const Wrapper = styled.div`
    margin-top: -80px;
    background-color: ${({ theme }) => theme.color.footerBackground};
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        margin-top: -40px;
    }
`;