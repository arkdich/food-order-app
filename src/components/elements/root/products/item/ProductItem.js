import PropTypes from 'prop-types';
import {
  Body,
  ProductStyled,
  Header,
  Title,
  Ingredients,
} from './ProductItem.styles';
import ProductFooter from '../footer/ProductFooter';
import Image from 'next/image';
import placeholder from '@assets/icons/placeholder.txt';

export default function ProductItem(props) {
  const { id, title, ingredients, price, img, isTablet, onClick } = props;

  return (
    <ProductStyled onClick={onClick}>
      <Header>
        <Image
          src={img.classic}
          alt="Пицца"
          width={270}
          height={270}
          placeholder="blur"
          blurDataURL={placeholder}
        />
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
  ingredients: PropTypes.array,
  price: PropTypes.object,
  img: PropTypes.object,
  isTablet: PropTypes.bool,
  onClick: PropTypes.func,
};
