import { useDispatch, useSelector } from 'react-redux';
import {
  LoadingError,
  ProductsContainer,
  Spinner,
} from './ProductsWrapper.styles';
import Product from '../item/Product';
import { ReactComponent as LoadingSpinner } from '@assets/icons/spinner.svg';
import { Section, Title } from '@components/Section.styles';
import { useEffect } from 'react';
import { fetchProducts } from '@store/slices/productsSlice/productsSlice';

export default function ProductsWrapper() {
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const filter = useSelector((state) => state.products.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status !== 'idle') return;

    dispatch(fetchProducts());
  }, [dispatch, status]);

  return (
    <Section as="main">
      <Title>Все пиццы</Title>
      {status === 'loading' && <Spinner as={LoadingSpinner} />}
      {status === 'error' && (
        <LoadingError>Что-то пошло не так, уже чиним 🏃</LoadingError>
      )}
      {status === 'success' && (
        <ProductsContainer>
          {(filter === 'all'
            ? products.pizzas
            : products.pizzas.filter((product) =>
                product.categories.includes(filter)
              )
          ).map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </ProductsContainer>
      )}
    </Section>
  );
}
