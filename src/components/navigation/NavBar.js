import { useEffect } from 'react';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';
import CartButton from './CartButton';
import { Item, Menu, NavBarStyled, NavContainer } from './NavBar.styles';
import NavLink from './NavLink';

export default function NavBar() {
  const rootMatch = useMatch('/');
  const location = useLocation();
  const navigate = useNavigate();

  const filterValue =
    rootMatch && new URLSearchParams(location.search).get('filter');

  useEffect(() => {
    if (rootMatch && !filterValue) navigate('/?filter=all', { replace: true });
  }, [filterValue]);

  return (
    <NavBarStyled>
      <NavContainer>
        <Menu>
          <Item>
            <NavLink to="/?filter=all" matches={filterValue === 'all'}>
              Все
            </NavLink>
          </Item>
          <Item>
            <NavLink to="/?filter=meat" matches={filterValue === 'meat'}>
              Мясные
            </NavLink>
          </Item>
          <Item>
            <NavLink to="/?filter=spicy" matches={filterValue === 'spicy'}>
              Острые
            </NavLink>
          </Item>
          <Item>
            <NavLink to="/?filter=cheese" matches={filterValue === 'cheese'}>
              Сырные
            </NavLink>
          </Item>
          <Item>
            <NavLink to="/?filter=veg" matches={filterValue === 'veg'}>
              Овощные
            </NavLink>
          </Item>
        </Menu>
        <CartButton />
      </NavContainer>
    </NavBarStyled>
  );
}
