import { NavLinkStyled } from './NavLink.styles';
import PropTypes from 'prop-types';

export default function NavLink(props) {
  const { children, to, matches, className, ...rest } = props;

  const activeClass = matches ? 'active' : '';
  const classes = className ? `${className} ${activeClass}` : activeClass;

  return (
    <NavLinkStyled to={to} className={classes} {...rest}>
      {children}
    </NavLinkStyled>
  );
}

NavLink.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string,
  matches: PropTypes.bool,
  className: PropTypes.string,
};
