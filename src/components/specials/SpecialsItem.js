import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { calcPrice } from '../../utils/formatters';
import Discount from '../globalStyle/Discount.style';
import {
  ImgWrapper,
  InfoContainer,
  Price,
  SpecialsItemStyled,
  Title,
} from './SpecialsItem.styles';

export default function SpecialsItem(props) {
  const { img, title, price, loaded, id, ...rest } = props;

  const discount = useSelector((state) => state.specials.items[id]);

  return (
    <SpecialsItemStyled {...rest}>
      <ImgWrapper loaded={loaded}>
        {loaded && <img src={img} alt="A picture of a pizza" />}
      </ImgWrapper>
      <InfoContainer>
        <Title loaded={loaded}>{loaded && title}</Title>
        <Price loaded={loaded}>
          {loaded && (
            <Discount price={price} place={'bottom'}>
              {`от ${calcPrice(price, discount)} ₽`}
            </Discount>
          )}{' '}
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
  loaded: PropTypes.bool,
};
