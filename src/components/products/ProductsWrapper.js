import {
  ProductsContainer,
  ProductsWrapperStyled,
  Title,
} from './ProductsWrapper.styles';

export default function ProductsWrapper() {
  return (
    <ProductsWrapperStyled as="main">
      <Title>Все пиццы</Title>
      <ProductsContainer></ProductsContainer>
    </ProductsWrapperStyled>
  );
}
