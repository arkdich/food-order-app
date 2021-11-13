import { Footer, Price, AddButton } from './ProductFooter.styles';
import { Fragment, useRef, useState, useEffect } from 'react';
import breakpoints from '../globalStyle/variables/breakpoints';
import PropTypes from 'prop-types';

export default function ProductFooter({ price }) {
  const media = useRef(
    window.matchMedia(`only screen and (max-width: ${breakpoints.tablet})`)
  );

  const [isTablet, setIsTablet] = useState(media.current.matches);

  useEffect(() => {
    const callback = () => setIsTablet(media.current.matches);

    media.current.addEventListener('change', callback);

    return () => media.current.removeEventListener('change', callback);
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
