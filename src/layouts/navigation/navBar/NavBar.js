import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Item, Menu, NavBarStyled, NavContainer } from './NavBar.styles';
import NavLink from '../navLink/NavLink';
import { productsActions } from '@store/slices/products/productsSlice';
import CartButton from '../cart/CartButton';
import useIsTablet from '@hooks/useIsTablet';

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isTablet = useIsTablet();

  const isRoot = location.pathname === '/';
  const filterValue =
    isRoot && new URLSearchParams(location.search).get('filter');

  const labels = {
    all: 'Все',
    meat: 'Мясные',
    spicy: 'Острые',
    cheese: 'Сырные',
    veg: 'Овощные',
  };

  const scrollItemHandler = (ev) => {
    ev.target.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  useEffect(() => {
    const changeFilterHandler = (value) => {
      dispatch(productsActions.changeFilter(value));
    };

    if (isRoot)
      if (!filterValue) navigate('/?filter=all', { replace: true });
      else changeFilterHandler(filterValue);

    if (!['/', '/cart', '/product'].includes(location.pathname))
      navigate('/?filter=all', { replace: true });
  }, [dispatch, navigate, filterValue, isRoot, location.pathname]);

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
