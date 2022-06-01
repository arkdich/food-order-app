import { useSelector } from 'react-redux';
import { LoadingError, ProductsContainer } from './ProductsWrapper.styles';
import ProductItem from '../item/ProductItem';
import { Section, Title } from '@assets/styles/Section.styles';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

export default function ProductsWrapper(props) {
  const { isTablet } = props;

  const products = useSelector((state) => state.products.items);
  const filter = useSelector((state) => state.products.filter);

  const router = useRouter();

  const labels = {
    all: 'Все',
    meat: 'Мясные',
    spicy: 'Острые',
    cheese: 'Сырные',
    veg: 'Овощные',
  };

  console.log('PRODUCTS');

  return (
    <Section as="main">
      <Title>{labels[filter]} пиццы</Title>
      {/* {status === 'error' && (
        <LoadingError>Что-то пошло не так, уже чиним 🏃</LoadingError>
      )} */}
      <ProductsContainer>
        {(filter === 'all'
          ? Object.values(products)
          : Object.values(products).filter((product) =>
              product.categories.includes(filter)
            )
        ).map((product) => (
          <ProductItem
            key={product.id}
            isTablet={isTablet}
            onClick={() =>
              router.push(`/?id=${product.id}`, null, { shallow: true })
            }
            {...product}
          />
        ))}
      </ProductsContainer>
    </Section>
  );
}

ProductsWrapper.propTypes = {
  isTablet: PropTypes.bool,
};
