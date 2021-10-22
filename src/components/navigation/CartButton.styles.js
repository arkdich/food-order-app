import styled from 'styled-components';
import { Button } from '../global/Button.styles';

export const CartButtonStyled = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  padding: 5px 10px;
  color: #fff;
  font-size: 1rem;
  white-space: nowrap;
`;

export const Total = styled.span``;

export const Divider = styled.div`
  width: 1px;
  height: 65%;
  margin: 0px 8px;
  background-color: #fff;
  opacity: 0.6;
`;

export const Quantity = styled.span``;
