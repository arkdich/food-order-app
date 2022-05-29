import PropTypes from 'prop-types';
import {
  Body,
  ProductStyled,
  Header,
  Title,
  Ingredients,
} from './ProductItem.styles';
import ProductFooter from '../footer/ProductFooter';
import { useState } from 'react';
import Placeholder from '@assets/icons/placeholder.svg';

export default function ProductItem(props) {
  const { id, title, ingredients, price, img, isTablet, onClick } = props;
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <ProductStyled>
      <Header>
        <img
          src={img.classic}
          alt="Пицца"
          style={{ display: imgLoaded ? 'block' : 'none' }}
          onLoad={() => setImgLoaded(true)}
          onClick={onClick}
        />
        {!imgLoaded && <Placeholder />}
      </Header>
      <Body>
        <Title>{title}</Title>
        <Ingredients>{ingredients.join(', ')}</Ingredients>
        <ProductFooter id={id} price={price.small} isTablet={isTablet} />
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
