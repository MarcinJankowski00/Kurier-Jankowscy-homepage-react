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
        font-size: 18px;
        color: #2c3e50;
        background-color: ${({ theme }) => theme.gallery};

    }
`;