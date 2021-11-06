import PropTypes from 'prop-types';
import {
  ImgCont,
  ProductStyled,
  Title,
  Ingredients,
  Footer,
  Price,
  AddButton,
} from './Product.styles';

export default function Product(props) {
  const { id, title, style, ingredients, price, img } = props;

  return (
    <ProductStyled>
      <ImgCont>
        <img src={img.classic} alt="A picture of a pizza" />
      </ImgCont>
      <Title>{title}</Title>
      <Ingredients>{ingredients.join(', ')}</Ingredients>
      <Footer>
        <Price>от {price.small} ₽</Price>
        <AddButton>Добавить</AddButton>
      </Footer>
    </ProductStyled>
  );
}

Product.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
  ingredients: PropTypes.array,
  price: PropTypes.object,
  img: PropTypes.object,
};
