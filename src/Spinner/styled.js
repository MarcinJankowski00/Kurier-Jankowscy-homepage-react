import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "./spinner.svg"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled(Spinner)`
    animation: ${rotate} 1s linear infinite;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        width: 100px;
    }
`;