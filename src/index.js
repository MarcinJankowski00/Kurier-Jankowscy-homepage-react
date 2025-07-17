import React from 'react';
import 'normalize.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './GlobalStyle';
import { theme } from './theme';
import { AuthProvider } from "./context/AuthContext";
import { DataProvider } from "./context/DataContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <DataProvider>
        <AuthProvider>
          <GlobalStyle />
          <App />
        </AuthProvider>
      </DataProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
