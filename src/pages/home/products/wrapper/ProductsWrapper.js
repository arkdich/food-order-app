import { useDispatch, useSelector } from 'react-redux';
import {
  LoadingError,
  ProductsContainer,
  Spinner,
} from './ProductsWrapper.styles';
import ProductItem from '../item/ProductItem';
import { ReactComponent as LoadingSpinner } from '@assets/icons/spinner.svg';
import { Section, Title } from '@assets/styles/Section.styles';
import { useEffect, useState } from 'react';
import { fetchProducts } from '@store/slices/products/productsSlice';
import useMatchMedia from '@hooks/useMatchMedia';
import breakpoints from '@utils/variables/breakpoints';

export default function ProductsWrapper() {
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const filter = useSelector((state) => state.products.filter);

  const media = useMatchMedia(
    `only screen and (max-width: ${breakpoints.tablet})`
  );

  const [isTablet, setIsTablet] = useState(media.matches);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status !== 'idle') return;

    dispatch(fetchProducts());
  }, [dispatch, status]);

  useEffect(() => {
    const callback = () => setIsTablet(media.matches);

    media.addEventListener('change', callback);

    return () => media.removeEventListener('change', callback);
  }, [media]);

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
