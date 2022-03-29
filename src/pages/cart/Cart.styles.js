import colors from '@utils/variables/colors';
import styled from 'styled-components';

export const CartStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  transition: transform 200ms ease-out;
  background-color: ${colors.primary};
`;
