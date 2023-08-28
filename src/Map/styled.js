import styled from "styled-components";

export const Content = styled.iframe`
    width: 100%;
    height: 400px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
            height: 350px;
        }
`;