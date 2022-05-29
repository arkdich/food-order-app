import colors from '@utils/variables/colors';
import styled from 'styled-components';

export const NavLinkStyled = styled.a`
  display: block;
  padding: 6px 10px;
  border-radius: 15px;
  background-color: #fafafa;
  text-decoration: none;
  color: #2c2c2c;

  &:hover {
    color: ${colors.brand};
  }

  &.active {
    background-color: ${colors.brand};
    color: #fff;
  }
`;
