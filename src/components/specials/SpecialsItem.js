import PropTypes from 'prop-types';
import {
  ImgWrapper,
  InfoContainer,
  Price,
  SpecialsItemStyled,
  Title,
} from './SpecialsItem.styles';

export default function SpecialsItem(props) {
  const { img, title, price, loaded, ...rest } = props;

  return (
    <SpecialsItemStyled {...rest}>
      <ImgWrapper loaded={loaded}>
        {loaded && <img src={img} alt="A picture of a pizza" />}
      </ImgWrapper>
      <InfoContainer>
        <Title loaded={loaded}>{loaded && title}</Title>
        <Price loaded={loaded}>{loaded && `от ${price} ₽`} </Price>
      </InfoContainer>
    </SpecialsItemStyled>
  );
}

SpecialsItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  loaded: PropTypes.bool,
};
