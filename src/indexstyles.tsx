
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
line-height: 1.5;
font-weight: 400;

color-scheme: light dark;
color: rgba(255, 255, 255, 0.87);
background-color: #020024;

  }

  html, body {
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    min-width: 320px;
  }
`;