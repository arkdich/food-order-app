/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';
import {
  Body,
  ProductStyled,
  Header,
  Title,
  Ingredients,
} from './ProductItem.styles';
import ProductFooter from '../footer/ProductFooter';

export default function ProductItem(props) {
  const { id, title, ingredients, price, img, isTablet, onClick } = props;

  return (
    <ProductStyled onClick={onClick}>
      <Header>
        <img src={img.classic} alt="Пицца" />
      </Header>
      <Body>
        <Title>{title}</Title>
        <Ingredients>{ingredients.join(', ')}</Ingredients>
        <ProductFooter
          id={id}
          price={price.small}
          isTablet={isTablet}
          onAdd={onClick}
        />
      </Body>
    </ProductStyled>
  );
}

ProductItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
  ingredients: PropTypes.array,
  price: PropTypes.object,
  img: PropTypes.object,
  isTablet: PropTypes.bool,
  onClick: PropTypes.func,
};
