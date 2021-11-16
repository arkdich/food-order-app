import { useSelector } from 'react-redux';
import {
  LoadingError,
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
  const filter = useSelector((state) => state.products.filter);

  return (
    <ProductsWrapperStyled as="main">
      <Title>Все пиццы</Title>
      {status === 'loading' && <Spinner as={LoadingSpinner} />}
      {status === 'error' && (
        <LoadingError>Что-то пошло не так, уже чиним 🏃</LoadingError>
      )}
      {status === 'success' && (
        <ProductsContainer>
          {(filter === 'all'
            ? products
            : products.filter((product) => product.categories.includes(filter))
          ).map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </ProductsContainer>
      )}
    </ProductsWrapperStyled>
  );
}
