import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
  
    *, ::after, ::before {
        box-sizing: inherit;
    }
  
    body {
        font-family: 'Lato', sans-serif;
        font-size: 20px;
        color: ${({ theme }) => theme.color.font};
        background-color: ${({ theme }) => theme.color.background};
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
            font-size: 15px;
        }
    }
`;