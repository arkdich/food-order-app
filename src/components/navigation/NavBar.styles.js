import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBarStyled = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #fff;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  padding: 8px 30px;
  margin: auto;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  margin-right: auto;
  list-style: none;
`;

export const Item = styled.li`
  margin: 5px;
`;

export const Link = styled(NavLink)`
  display: block;
  padding: 8px 10px;
  border-radius: 15px;
  background-color: #f1f1f1;
  text-decoration: none;
  color: #2c2c2c;

  &:hover {
    color: #ff6900;
  }

  &.${(props) => props.activeClassName} {
    background-color: #282828;
    color: #fff;
  }
`;
export const LogoWrapper = styled.div`
  width: 45px;
  height: 45px;
  margin-right: 15px;
`;

export const Logo = styled.img`
  width: 100%;
`;
