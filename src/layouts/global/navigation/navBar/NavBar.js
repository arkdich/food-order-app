import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Item, Menu, NavBarStyled, NavContainer } from './NavBar.styles';
import NavLink from '../navLink/NavLink';
import { productsActions } from '@store/slices/products/productsSlice';
import CartButton from '../cart/CartButton';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { IndexCtx } from '@pages/index';

export default function NavBar() {
  const context = useContext(IndexCtx);

  const dispatch = useDispatch();
  const router = useRouter();

  const isRoot = router.pathname === '/';
  const filterValue =
    isRoot &&
    new URLSearchParams(router.asPath.split('/').at(-1)).get('filter');

  console.log(router);

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
    if (!isRoot) return;

    if (!filterValue) router.replace('/?filter=all', null, { shallow: true });
    else dispatch(productsActions.changeFilter(filterValue));

    console.log(isRoot, filterValue);
  }, [dispatch, filterValue, isRoot, router.pathname, router]);

  return (
    <NavBarStyled>
      <NavContainer>
        <Menu>
          {['all', 'meat', 'spicy', 'cheese', 'veg'].map((type) => (
            <Item key={type}>
              <Link href={`/?filter=${type}`} passHref shallow={true}>
                <NavLink
                  matches={filterValue === type}
                  onClick={scrollItemHandler}
                >
                  {labels[type]}
                </NavLink>
              </Link>
            </Item>
          ))}
        </Menu>
        {!context.isTablet && <CartButton />}
      </NavContainer>
    </NavBarStyled>
  );
}

NavBar.propTypes = {
  isTablet: PropTypes.bool,
};
