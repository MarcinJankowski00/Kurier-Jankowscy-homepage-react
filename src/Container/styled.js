import styled from "styled-components";

export const Main = styled.div`
    max-width: 1200px;
    padding: 20px;
    margin: 0 auto;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            padding-top: 32px;
        }
`;