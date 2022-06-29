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
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CartEntry(props) {
  const { id, type, size, price, img, title, count, last } = props;

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
    <CartEntryStyled
      as={motion.article}
      exit={last ? {} : { transform: 'translateX(200%)' }}
      transition={{ duration: 0.4 }}
    >
      <Left>
        <Image src={img} alt={`Пицца ${title}`} width={120} height={120} />
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
  last: PropTypes.bool,
};
