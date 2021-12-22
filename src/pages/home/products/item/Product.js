import PropTypes from 'prop-types';
import {
  Body,
  ProductStyled,
  Header,
  Title,
  Ingredients,
} from './Product.styles';
import ProductFooter from '../footer/ProductFooter';
import { useState } from 'react';
import { ReactComponent as Placeholder } from '@assets/icons/placeholder.svg';

export default function Product(props) {
  // eslint-disable-next-line no-unused-vars
  const { id, title, style, ingredients, price, img, isTablet } = props;
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <ProductStyled>
      <Header>
        {
          <img
            src={img.classic}
            alt="A pizza"
            style={{ display: imgLoaded ? 'block' : 'none' }}
            onLoad={() => setImgLoaded(true)}
          />
        }
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

Product.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
  ingredients: PropTypes.array,
  price: PropTypes.object,
  img: PropTypes.object,
  isTablet: PropTypes.bool,
};
