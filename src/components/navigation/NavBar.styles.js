import styled from 'styled-components';
import colors from '../globalStyle/variables/colors';
import Container from './../globalStyle/Container.style';
import breakpoints from '../globalStyle/variables/breakpoints';

export const NavBarStyled = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 8px 10px;
  background-color: ${colors.secondary};
`;

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: auto;

  /* hide scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
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
