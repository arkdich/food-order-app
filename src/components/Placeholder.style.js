import { css, keyframes } from 'styled-components';

const PlaceholderAnim = keyframes`
0% {
    background-position: 50% 0;
  }
  
  100% {
      background-position: -150% 0;
  }
`;

const PlaceholderBG = css`
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    #f5f5f5 5%,
    #eeeeee 20%,
    #eeeeee 30%,
    #f5f5f5 45%
  );
  background-size: 200% 100%;
  animation: ${PlaceholderAnim} 1.2s linear infinite;
`;

export default PlaceholderBG;
