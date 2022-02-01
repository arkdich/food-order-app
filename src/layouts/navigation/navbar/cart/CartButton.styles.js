import styled from 'styled-components';
import Button from '@assets/styles/Button.styles';
import colors from '@utils/variables/colors';

export const CartButtonStyled = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: ${colors.brand};
  font-size: 1.3rem;
  white-space: nowrap;
`;

export const Total = styled.span``;

export const Divider = styled.div`
  width: 1px;
  height: 20px;
  margin: 0px 8px;
  border-radius: 20px;
  background-color: #fff;
`;

export const Quantity = styled.span``;
