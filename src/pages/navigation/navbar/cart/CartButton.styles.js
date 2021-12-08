import styled from 'styled-components';
import Button from '@components/Button.styles';
import breakpoints from '@utils/variables/breakpoints';
import colors from '@utils/variables/colors';

export const CartButtonStyled = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: ${colors.brand};
  font-size: 1.3rem;
  white-space: nowrap;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const Total = styled.span``;

export const Divider = styled.div`
  width: 2px;
  height: 20px;
  margin: 0px 8px;
  border-radius: 20px;
  background-color: #fff;
`;

export const Quantity = styled.span``;
