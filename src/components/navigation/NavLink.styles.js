import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyled = styled(Link)`
  display: block;
  padding: 6px 10px;
  border-radius: 15px;
  background-color: #f1f1f1;
  text-decoration: none;
  color: #2c2c2c;

  &:hover {
    color: #ff6900;
  }

  &.active {
    background-color: #282828;
    color: #fff;
  }
`;
