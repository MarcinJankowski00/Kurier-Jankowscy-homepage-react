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
        color: ${({ theme }) => theme.color.teal};
        background-color: ${({ theme }) => theme.color.white};
    }
`;