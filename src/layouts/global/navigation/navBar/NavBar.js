import { useContext } from 'react';
import { Item, Menu, NavBarStyled, NavContainer } from './NavBar.styles';
import NavLink from '../navLink/NavLink';
import CartButton from '../cart/CartButton';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { IndexCtx } from '@pages/index';
import getURLSearch from '@utils/formatters/getURLSearch';

export default function NavBar() {
  const context = useContext(IndexCtx);
  const router = useRouter();

  const currentFilter = getURLSearch(router.asPath, 'filter');

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

  return (
    <NavBarStyled>
      <NavContainer>
        <Menu>
          {['all', 'meat', 'spicy', 'cheese', 'veg'].map((type) => (
            <Item key={type}>
              <Link href={`/?filter=${type}`} passHref shallow={true}>
                <NavLink
                  matches={currentFilter === type}
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
