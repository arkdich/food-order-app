import { useSelector } from 'react-redux';
import { Section, Title } from '@assets/styles/Section.styles';
import { SpecialsStyled } from './SpecialsWrapper.styles';
import SpecialsItem from '../item/SpecialsItem';
import { useRef } from 'react';
import SpecialsControls from '../controls/SpecialsControls';
import useMatchMedia from '@hooks/useMatchMedia';
import { useRouter } from 'next/router';

export default function SpecialsWrapper() {
  const {
    info: specialsInfo,
    items: specialsItems,
    error: specialsError,
  } = useSelector((state) => state.specials);

  const productsItems = useSelector((state) => state.products.items);

  const media = useMatchMedia('only screen and (hover)');

  const container = useRef();
  const router = useRouter();

  const openModalHandler = (id) =>
    router.push(`/?id=${id}`, null, { shallow: true });

  if (specialsError) return null;

  console.log('SPECIALS');

  return (
    <Section
      as="aside"
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingBottom: '10px',
      }}
      data-testid="specials-cont"
    >
      <Title style={{ marginLeft: '0px' }}>{specialsInfo.title}</Title>
      <SpecialsStyled as="section" ref={container} isTablet={!media?.matches}>
        {Object.values(productsItems)
          .filter((product) => specialsItems[product.id])
          .map((product) => (
            <SpecialsItem
              key={product.id}
              id={product.id}
              img={product.img.classic}
              title={product.title}
              price={product.price.small}
              isTablet={!media?.matches}
              onClick={() => openModalHandler(product.id)}
            />
          ))}
      </SpecialsStyled>
      {media?.matches && (
        <SpecialsControls
          container={container.current}
          itemsCount={Object.keys(specialsItems).length}
        />
      )}
    </Section>
  );
}
