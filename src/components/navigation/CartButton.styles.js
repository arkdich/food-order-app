import styled from 'styled-components';
import { Button } from '../globalStyle/Button.styles';
import colors from '../globalStyle/variables/colors';

export const CartButtonStyled = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: ${colors.tertiary};
  font-size: 1.3rem;
  white-space: nowrap;
`;

export const Total = styled.span``;

export const Divider = styled.div`
  width: 2px;
  height: 20px;
  margin: 0px 8px;
  background-color: #fff;
`;

export const Quantity = styled.span``;
