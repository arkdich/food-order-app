import { createGlobalStyle } from 'styled-components';
import colors from './variables/colors';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.primary};
    font-family: 'Raleway', apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.1rem;
    font-weight: 400;
    min-height: 100vh;
  }

  a, button {
    -webkit-tap-highlight-color: transparent;
  }
`;
