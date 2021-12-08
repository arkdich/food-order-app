import styled from 'styled-components';
import colors from '@utils/variables/colors';

const Button = styled.button`
  padding: 8px 18px;
  border-style: none;
  border-radius: 20px;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  background-color: ${colors.primary};
  cursor: pointer;
`;

export default Button;
