import PropTypes from 'prop-types';
import {
  ImgWrapper,
  InfoContainer,
  Price,
  SpecialsItemStyled,
  Title,
} from './SpecialsItem.styles';

export default function SpecialsItem(props) {
  const { img, title, price } = props;

  return (
    <SpecialsItemStyled>
      <ImgWrapper>
        <img src={img} alt="A picture of a pizza" />
      </ImgWrapper>
      <InfoContainer>
        <Title>{title}</Title>
        <Price>от {price} ₽</Price>
      </InfoContainer>
    </SpecialsItemStyled>
  );
}

SpecialsItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};
