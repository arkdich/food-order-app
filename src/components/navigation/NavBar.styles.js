import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../globalStyle/variables/colors';

export const NavBarStyled = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${colors.secondary};
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

export const Link = styled(NavLink).attrs({
  activeClassName: 'selected',
})`
  display: block;
  padding: 6px 10px;
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
