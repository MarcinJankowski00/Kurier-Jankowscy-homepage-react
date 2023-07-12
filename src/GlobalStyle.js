import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
  
    *, ::after, ::before {
        box-sizing: inherit;
    }
  
    body {
        font-family: 'Rubik', sans-serif;
        font-size: 23px;
        color: #2c3e50;
        background-color: ${({ theme }) => theme.gallery};

        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 18px;
        }
    }
`;