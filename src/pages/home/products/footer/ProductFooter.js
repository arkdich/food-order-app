import { Footer, Price, AddButton } from './ProductFooter.styles';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Discount from '@components/Discount.style';
import calcPrice from '@utils/formatters/calcDiscountPrice';

export default function ProductFooter(props) {
  const { price, id, isTablet } = props;

  const discount = useSelector((state) => state.specials.items[id]);

  const finalPrice = discount ? (
    <Discount price={price} place={isTablet ? 'mobile' : 'top'}>
      {`от ${calcPrice(price, discount)} ₽`}
    </Discount>
  ) : (
    `от ${price} ₽`
  );

  return (
    <Footer>
      {isTablet && (
        <AddButton mobile={discount && isTablet}>{finalPrice}</AddButton>
      )}
      {!isTablet && (
        <Fragment>
          <Price>{finalPrice}</Price>
          <AddButton mobile={discount && isTablet}>Добавить</AddButton>
        </Fragment>
      )}
    </Footer>
  );
}

ProductFooter.propTypes = {
  id: PropTypes.string,
  price: PropTypes.number,
  isTablet: PropTypes.bool,
};
