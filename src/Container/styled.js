import styled from "styled-components";

export const Main = styled.div`
    max-width: 1300px;
    padding: 20px;
    padding-top: 145px;
    margin: 0 auto;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            padding-top: 90px;
        }
`;