import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';
import { Item, Menu, NavBarStyled, NavContainer } from './NavBar.styles';
import NavLink from '../link/NavLink';
import { productsActions } from '@store/slices/products/productsSlice';
import CartButton from '../cart/CartButton';

export default function NavBar() {
  const rootMatch = useMatch('/');
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const filterValue =
    rootMatch && new URLSearchParams(location.search).get('filter');

  const changeFilterHandler = useCallback(
    (value) => {
      dispatch(productsActions.changeFilter(value));
    },
    [dispatch]
  );

  const scrollItemHandler = (ev) => {
    ev.target.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  useEffect(() => {
    if (rootMatch)
      if (!filterValue) navigate('/?filter=all', { replace: true });
      else changeFilterHandler(filterValue);
  }, [changeFilterHandler, filterValue, navigate, rootMatch]);

  return (
    <NavBarStyled>
      <NavContainer>
        <Menu>
          <Item>
            <NavLink
              to="/?filter=all"
              matches={filterValue === 'all'}
              onClick={scrollItemHandler}
            >
              Все
            </NavLink>
          </Item>
          <Item>
            <NavLink
              to="/?filter=meat"
              matches={filterValue === 'meat'}
              onClick={scrollItemHandler}
            >
              Мясные
            </NavLink>
          </Item>
          <Item>
            <NavLink
              to="/?filter=spicy"
              matches={filterValue === 'spicy'}
              onClick={scrollItemHandler}
            >
              Острые
            </NavLink>
          </Item>
          <Item>
            <NavLink
              to="/?filter=cheese"
              matches={filterValue === 'cheese'}
              onClick={scrollItemHandler}
            >
              Сырные
            </NavLink>
          </Item>
          <Item>
            <NavLink
              to="/?filter=veg"
              matches={filterValue === 'veg'}
              onClick={scrollItemHandler}
            >
              Овощные
            </NavLink>
          </Item>
        </Menu>
        <CartButton />
      </NavContainer>
    </NavBarStyled>
  );
}
