import { Footer, Price, AddButton } from './ProductFooter.styles';
import { Fragment, useState, useEffect } from 'react';
import breakpoints from '@utils/variables/breakpoints';
import PropTypes from 'prop-types';
import useMatchMedia from '@hooks/useMatchMedia';
import { useSelector } from 'react-redux';
import Discount from '@components/Discount.style';
import calcPrice from '@/utils/formatters/calcDiscountPrice';

export default function ProductFooter(props) {
  const { price, id } = props;
  const discount = useSelector((state) => state.specials.items[id]);

  const finalPrice = discount ? (
    <Discount price={price} place={'top'}>
      {`от ${calcPrice(price, discount)} ₽`}
    </Discount>
  ) : (
    `от ${price} ₽`
  );

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
      {isTablet && <AddButton>{finalPrice}</AddButton>}
      {!isTablet && (
        <Fragment>
          <Price>{finalPrice}</Price>
          <AddButton>Добавить</AddButton>
        </Fragment>
      )}
    </Footer>
  );
}

ProductFooter.propTypes = {
  id: PropTypes.string,
  price: PropTypes.number,
};
