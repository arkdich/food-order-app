import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';
import { Item, Menu, NavBarStyled, NavContainer } from './NavBar.styles';
import NavLink from '../navLink/NavLink';
import { productsActions } from '@store/slices/products/productsSlice';
import CartButton from '../cart/CartButton';
import useIsTablet from '@hooks/useIsTablet';

export default function NavBar() {
  const rootMatch = useMatch('/');
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isTablet = useIsTablet();

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

  const labels = {
    all: 'Все',
    meat: 'Мясные',
    spicy: 'Острые',
    cheese: 'Сырные',
    veg: 'Овощные',
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
          {['all', 'meat', 'spicy', 'cheese', 'veg'].map((type) => (
            <Item key={type}>
              <NavLink
                to={`/?filter=${type}`}
                matches={filterValue === type}
                onClick={scrollItemHandler}
              >
                {labels[type]}
              </NavLink>
            </Item>
          ))}
        </Menu>
        {!isTablet && <CartButton />}
      </NavContainer>
    </NavBarStyled>
  );
}
