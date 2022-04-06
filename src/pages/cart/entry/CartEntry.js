import PropTypes from 'prop-types';
import {
  Info,
  Left,
  Price,
  PriceWrapper,
  Right,
  Title,
  CartEntryStyled,
} from './CartEntry.styles';
import EntryControls from '../controls/EntryControls';

export default function CartEntry(props) {
  const { id, type, size, price, img, title, count } = props;

  const options = {
    type: {
      classic: 'традиционное',
      thin: `тонкое`,
    },
    size: {
      small: `25 см`,
      normal: `30 см`,
      large: `35 см`,
    },
  };

  return (
    <CartEntryStyled>
      <Left>
        <img src={img} alt={`Пицца ${title}`} />
      </Left>
      <Right>
        <Title>{title}</Title>
        <Info>{`${options.size[size]}, ${options.type[type]} тесто`}</Info>
        <PriceWrapper>
          <Price>{price} ₽</Price>
          <EntryControls
            id={id}
            size={size}
            type={type}
            count={count}
            price={price}
          />
        </PriceWrapper>
      </Right>
    </CartEntryStyled>
  );
}

CartEntry.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number,
};
