import { useDispatch, useSelector } from 'react-redux';
import {
  LoadingError,
  ProductsContainer,
  Spinner,
} from './ProductsWrapper.styles';
import ProductItem from '../item/ProductItem';
import { ReactComponent as LoadingSpinner } from '@assets/icons/spinner.svg';
import { Section, Title } from '@assets/styles/Section.styles';
import { useEffect } from 'react';
import { fetchProducts } from '@store/slices/products/productsSlice';
import useIsTablet from '@hooks/useIsTablet';

export default function ProductsWrapper() {
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const filter = useSelector((state) => state.products.filter);

  const isTablet = useIsTablet();

  const dispatch = useDispatch();

  const labels = {
    all: 'Все',
    meat: 'Мясные',
    spicy: 'Острые',
    cheese: 'Сырные',
    veg: 'Овощные',
  };

  useEffect(() => {
    if (status !== 'idle') return;

    dispatch(fetchProducts());
  }, [dispatch, status]);

  return (
    <Section as="main">
      <Title>{labels[filter]} пиццы</Title>
      {status === 'loading' && <Spinner as={LoadingSpinner} />}
      {status === 'error' && (
        <LoadingError>Что-то пошло не так, уже чиним 🏃</LoadingError>
      )}
      {status === 'success' && (
        <ProductsContainer>
          {(filter === 'all'
            ? Object.values(products)
            : Object.values(products).filter((product) =>
                product.categories.includes(filter)
              )
          ).map((product) => (
            <ProductItem key={product.id} isTablet={isTablet} {...product} />
          ))}
        </ProductsContainer>
      )}
    </Section>
  );
}
