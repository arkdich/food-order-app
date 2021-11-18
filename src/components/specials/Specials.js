import { useSelector } from 'react-redux';
import { Section, Title } from '../globalStyle/Section.styles';
import { SpecialsWrapper } from './Specials.styles';
import SpecialsItem from './SpecialsItem';

export default function Specials() {
  const specials = useSelector((state) => state.specials.item);
  const products = useSelector((state) => state.products.items);

  const specialsStatus = useSelector((state) => state.specials.status);
  const productsStatus = useSelector((state) => state.products.status);

  const allLoaded =
    specialsStatus === 'success' && productsStatus === 'success';

  return (
    <Section as="aside">
      <Title>{allLoaded ? specials.title : 'Особые предложения'}</Title>
      <SpecialsWrapper as="section">
        {specialsStatus === 'loading' &&
          [0, 1, 2, 3, 4].map((i) => <SpecialsItem key={i} loaded={false} />)}
        {allLoaded &&
          products
            .filter((product) =>
              product.categories.some(
                (category) => specials.discounts?.[category]
              )
            )
            .map((product) => (
              <SpecialsItem
                key={product.id}
                img={product.img.classic}
                title={product.title}
                price={product.price.small}
                loaded={allLoaded}
              />
            ))}
      </SpecialsWrapper>
    </Section>
  );
}
