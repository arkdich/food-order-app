import { useLocation } from 'react-router-dom';
import CartButton from './CartButton';
import { Item, Menu, NavBarStyled, Link, Logo } from './NavBar.styles';

export default function NavBar() {
  const location = useLocation();

  const filterValue = new URLSearchParams(location.search).get('filter');

  return (
    <NavBarStyled>
      <Logo />
      <Menu>
        <Item>
          <Link
            to="?filter=all"
            activeClassName={'selected'}
            isActive={() => filterValue === 'all'}
          >
            Все
          </Link>
        </Item>
        <Item>
          <Link
            to="?filter=meat"
            activeClassName={'selected'}
            isActive={() => filterValue === 'meat'}
          >
            Мясные
          </Link>
        </Item>
        <Item>
          <Link
            to="?filter=spicy"
            activeClassName={'selected'}
            isActive={() => filterValue === 'spicy'}
          >
            Острые
          </Link>
        </Item>
        <Item>
          <Link
            to="?filter=cheese"
            activeClassName={'selected'}
            isActive={() => filterValue === 'cheese'}
          >
            Сырные
          </Link>
        </Item>
        <Item>
          <Link
            to="?filter=veg"
            activeClassName={'selected'}
            isActive={() => filterValue === 'veg'}
          >
            Овощные
          </Link>
        </Item>
      </Menu>
      <CartButton />
    </NavBarStyled>
  );
}
