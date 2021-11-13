import PropTypes from 'prop-types';
import {
  Body,
  ProductStyled,
  Header,
  Title,
  Ingredients,
} from './Product.styles';
import ProductFooter from './ProductFooter';
import { useState } from 'react';
import { ReactComponent as Placeholder } from './../../assets/placeholder.svg';

export default function Product(props) {
  const { id, title, style, ingredients, price, img } = props;
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <ProductStyled>
      <Header>
        {
          <img
            src={img.classic}
            alt="A picture of a pizza"
            style={{ display: imgLoaded ? 'block' : 'none' }}
            onLoad={() => setImgLoaded(true)}
          />
        }
        {!imgLoaded && <Placeholder />}
      </Header>
      <Body>
        <Title>{title}</Title>
        <Ingredients>{ingredients.join(', ')}</Ingredients>
        <ProductFooter price={price} />
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
};
