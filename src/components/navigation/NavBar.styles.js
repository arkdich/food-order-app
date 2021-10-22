import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from './../../assets/logo.png';

export const NavBarStyled = styled.nav`
  display: flex;
  align-items: center;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const Item = styled.li``;

export const Link = styled(NavLink)`
  text-decoration: none;

  &.${(props) => props.activeClassName} {
    background-color: grey;
  }
`;

export const Logo = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
