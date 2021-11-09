import { Footer, Price, AddButton } from './ProductFooter.styles';
import { Fragment } from 'react';
import breakpoints from '../globalStyle/variables/breakpoints';
import PropTypes from 'prop-types';

export default function ProductFooter({ price }) {
  const isPhone = window.matchMedia(
    `only screen and (max-width: ${breakpoints.tablet})`
  ).matches;

  const footer = isPhone ? (
    <Fragment>
      <AddButton>от {price.small} ₽</AddButton>
    </Fragment>
  ) : (
    <Fragment>
      <Price>от {price.small} ₽</Price>
      <AddButton price={price.small}>Добавить</AddButton>
    </Fragment>
  );
  return <Footer>{footer}</Footer>;
}

ProductFooter.propTypes = {
  price: PropTypes.object,
};
