import { Footer, Price, AddButton } from './ProductFooter.styles';
import { Fragment, useState, useEffect } from 'react';
import breakpoints from '../globalStyle/variables/breakpoints';
import PropTypes from 'prop-types';
import useMatchMedia from '../../hooks/useMatchMedia';

export default function ProductFooter(props) {
  const { price } = props;

  const media = useMatchMedia(
    `only screen and (max-width: ${breakpoints.tablet})`
  );

  const [isTablet, setIsTablet] = useState(media.matches);

  useEffect(() => {
    const callback = () => setIsTablet(media.matches);

    media.addEventListener('change', callback);

    return () => media.removeEventListener('change', callback);
  }, []);

  return (
    <Footer>
      {isTablet && <AddButton>от {price.small} ₽</AddButton>}
      {!isTablet && (
        <Fragment>
          <Price>от {price.small} ₽</Price>
          <AddButton price={price.small}>Добавить</AddButton>
        </Fragment>
      )}
    </Footer>
  );
}

ProductFooter.propTypes = {
  price: PropTypes.object,
};
