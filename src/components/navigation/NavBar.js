import { useLocation } from 'react-router-dom';
import CartButton from './CartButton';
import { Item, Menu, NavBarStyled, Link, NavContainer } from './NavBar.styles';

export default function NavBar() {
  const location = useLocation();

  const filterValue = new URLSearchParams(location.search).get('filter');

  return (
    <NavBarStyled>
      <NavContainer>
        <Menu>
          <Item>
            <Link to="?filter=all" isActive={() => filterValue === 'all'}>
              Все
            </Link>
          </Item>
          <Item>
            <Link to="?filter=meat" isActive={() => filterValue === 'meat'}>
              Мясные
            </Link>
          </Item>
          <Item>
            <Link to="?filter=spicy" isActive={() => filterValue === 'spicy'}>
              Острые
            </Link>
          </Item>
          <Item>
            <Link to="?filter=cheese" isActive={() => filterValue === 'cheese'}>
              Сырные
            </Link>
          </Item>
          <Item>
            <Link to="?filter=veg" isActive={() => filterValue === 'veg'}>
              Овощные
            </Link>
          </Item>
        </Menu>
        <CartButton />
      </NavContainer>
    </NavBarStyled>
  );
}
