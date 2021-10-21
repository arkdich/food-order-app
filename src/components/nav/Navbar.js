import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.module.css';

export default function Navbar() {
  const location = useLocation();

  const filterValue = new URLSearchParams(location.search).get('filter');

  return (
    <nav className="navbar">
      <ul className="menu">
        <li className="item">
          <NavLink
            to="?filter=all"
            className="link"
            activeClassName="selected"
            isActive={() => filterValue === 'all'}
          >
            Все
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="?filter=meat"
            className="link"
            activeClassName="selected"
            isActive={() => filterValue === 'meat'}
          >
            Мясные
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="?filter=spicy"
            className="link"
            activeClassName="selected"
            isActive={() => filterValue === 'spicy'}
          >
            Острые
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="?filter=cheese"
            className="link"
            activeClassName="selected"
            isActive={() => filterValue === 'cheese'}
          >
            Сырные
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="?filter=veg"
            className="link"
            activeClassName="selected"
            isActive={() => filterValue === 'veg'}
          >
            Овощные
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
