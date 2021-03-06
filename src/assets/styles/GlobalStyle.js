import { createGlobalStyle } from 'styled-components';
import colors from '@utils/variables/colors';

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
    font-size: 18px;
    font-weight: 400;
    min-height: 100vh;

    @media only screen and (max-width: 380px) {
      font-size: 16px;
    }
  
  }

  a, button {
    -webkit-tap-highlight-color: transparent;
  }

  img {
    width: 100%;
  }
`;
