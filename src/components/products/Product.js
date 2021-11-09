import PropTypes from 'prop-types';
import {
  Body,
  ProductStyled,
  Header,
  Title,
  Ingredients,
  Footer,
  Price,
  AddButton,
} from './Product.styles';
import breakpoints from './../globalStyle/variables/breakpoints';
import { Fragment } from 'react';

export default function Product(props) {
  const { id, title, style, ingredients, price, img } = props;

  const isPhone = window.matchMedia(
    `only screen and (max-width: ${breakpoints.tablet})`
  ).matches;

  const footer = isPhone ? (
    <Fragment>
      <AddButton>от {price.small} ₽</AddButton>
    </Fragment>
  ) : (
    <Fragment>
      <Price>от {price.small} ₽</Price>
      <AddButton price={price.small}>Добавить</AddButton>
    </Fragment>
  );

  return (
    <ProductStyled>
      <Header>
        <img src={img.classic} alt="A picture of a pizza" />
      </Header>
      <Body>
        <Title>{title}</Title>
        <Ingredients>{ingredients.join(', ')}</Ingredients>
        <Footer>{footer}</Footer>
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
