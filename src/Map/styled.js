import styled from "styled-components";

export const Content = styled.iframe`
    width: 100%;
    height: 350px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
            height: 350px;
        }

`;
export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.color.footerBackground};
`;