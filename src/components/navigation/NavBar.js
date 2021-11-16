import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';
import CartButton from './CartButton';
import { Item, Menu, NavBarStyled, NavContainer } from './NavBar.styles';
import NavLink from './NavLink';
import { productsActions } from '../../store/productsSlice';

export default function NavBar() {
  const rootMatch = useMatch('/');
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const filterValue =
    rootMatch && new URLSearchParams(location.search).get('filter');

  const changeFilterHandler = (value) => {
    dispatch(productsActions.changeFilter(value));
  };

  useEffect(() => {
    if (rootMatch)
      if (!filterValue) navigate('/?filter=all', { replace: true });
      else changeFilterHandler(filterValue);
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
