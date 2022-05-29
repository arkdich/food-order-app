import { NavLinkStyled } from './NavLink.styles';
import PropTypes from 'prop-types';
import React from 'react';

const NavLink = React.forwardRef(function NavLink(props, ref) {
  const { children, matches, className, ...rest } = props;

  const activeClass = matches ? 'active' : '';
  const classes = className ? `${className} ${activeClass}` : activeClass;

  return (
    <NavLinkStyled ref={ref} className={classes} {...rest}>
      {children}
    </NavLinkStyled>
  );
});

NavLink.propTypes = {
  children: PropTypes.any,
  matches: PropTypes.bool,
  className: PropTypes.string,
};

export default NavLink;
