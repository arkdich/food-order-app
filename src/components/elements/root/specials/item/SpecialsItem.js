import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import calcPrice from '@utils/formatters/calcDiscountPrice';
import Discount from '@assets/styles/Discount.style';
import {
  ImgWrapper,
  InfoContainer,
  Price,
  SpecialsItemStyled,
  Title,
} from './SpecialsItem.styles';
import Image from 'next/image';

export default function SpecialsItem(props) {
  const { img, title, price, id, ...rest } = props;

  const discount = useSelector((state) => state.specials.items[id]);

  return (
    <SpecialsItemStyled {...rest}>
      <ImgWrapper>
        <Image
          src={img}
          alt="Product with a special price"
          width="100%"
          height="100%"
        />
      </ImgWrapper>
      <InfoContainer>
        <Title>{title}</Title>
        <Price>
          <Discount price={price} place={'bottom'}>
            {`от ${calcPrice(price, discount)} ₽`}
          </Discount>
        </Price>
      </InfoContainer>
    </SpecialsItemStyled>
  );
}

SpecialsItem.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};
