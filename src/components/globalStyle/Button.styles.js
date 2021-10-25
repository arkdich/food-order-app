import styled from 'styled-components';
import colors from './variables/colors';

export const Button = styled.button`
  padding: 6px 14px;
  border-style: none;
  border-radius: 20px;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  background-color: ${colors.primary};
  cursor: pointer;
`;
