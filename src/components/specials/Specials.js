import { useSelector } from 'react-redux';
import { Section, Title } from '../globalStyle/Section.styles';
import { SpecialsWrapper } from './Specials.styles';
import SpecialsItem from './SpecialsItem';

export default function Specials() {
  const specials = useSelector((state) => state.specials.item);
  const products = useSelector((state) => state.products.items);

  console.log(products);
  return (
    <Section as="aside">
      <Title>{specials.title}</Title>
      <SpecialsWrapper as="section">
        {products
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
            />
          ))}
      </SpecialsWrapper>
    </Section>
  );
}
