import { useSelector } from 'react-redux';
import {
  ProductsContainer,
  ProductsWrapperStyled,
  Title,
} from './ProductsWrapper.styles';
import Product from './Product';

export default function ProductsWrapper() {
  const products = useSelector((state) => state.products.items);

  console.log(products);
  return (
    <ProductsWrapperStyled as="main">
      <Title>Все пиццы</Title>
      <ProductsContainer>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ProductsContainer>
    </ProductsWrapperStyled>
  );
}
