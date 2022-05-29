import { Footer, Price, AddButton } from './ProductFooter.styles';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Discount from '@assets/styles/Discount.style';
import calcPrice from '@utils/formatters/calcDiscountPrice';
import { useRouter } from 'next/router';

export default function ProductFooter(props) {
  const { price, id, isTablet } = props;

  const discount = useSelector((state) => state.specials.items[id]);
  const router = useRouter();

  const finalPrice = discount ? (
    <Discount price={price} place={isTablet ? 'mobile' : 'top'}>
      {`от ${calcPrice(price, discount)} ₽`}
    </Discount>
  ) : (
    `от ${price} ₽`
  );

  const addBtnHandler = () => router.push(`product?id=${id}`);

  return (
    <Footer>
      {isTablet && (
        <AddButton mobile={discount && isTablet} onClick={addBtnHandler}>
          {finalPrice}
        </AddButton>
      )}
      {!isTablet && (
        <Fragment>
          <Price>{finalPrice}</Price>
          <AddButton mobile={discount && isTablet} onClick={addBtnHandler}>
            Выбрать
          </AddButton>
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
