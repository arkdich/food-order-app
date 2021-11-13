import { useSelector } from 'react-redux';
import {
  ProductsContainer,
  ProductsWrapperStyled,
  Spinner,
  Title,
} from './ProductsWrapper.styles';
import Product from './Product';
import { ReactComponent as LoadingSpinner } from './../../assets/spinner.svg';

export default function ProductsWrapper() {
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);

  console.log(products);
  return (
    <ProductsWrapperStyled as="main">
      <Title>Все пиццы</Title>
      {status === 'success' ? (
        <ProductsContainer>
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </ProductsContainer>
      ) : (
        <Spinner as={LoadingSpinner} />
      )}
    </ProductsWrapperStyled>
  );
}
