import { useDispatch, useSelector } from 'react-redux';
import { Section, Title } from '../globalStyle/Section.styles';
import { SpecialsWrapper } from './Specials.styles';
import SpecialsItem from './SpecialsItem';
import { useEffect, useRef } from 'react';
import { specialsActions } from './../../store/specialsSlice';
import SpecialsControls from './SpecialsControls';
import useMatchMedia from '../../hooks/useMatchMedia';

export default function Specials() {
  const {
    info: specialsInfo,
    status: specialsStatus,
    items: specialsItems,
  } = useSelector((state) => state.specials);

  const { items: products, status: productsStatus } = useSelector(
    (state) => state.products,
    (state) => state.status !== 'success'
  );

  const media = useMatchMedia('only screen and (hover)');

  const container = useRef();

  const dispatch = useDispatch();

  const allLoaded =
    specialsStatus === 'success' && productsStatus === 'success';

  useEffect(() => {
    if (!allLoaded) return;

    const specialsItems = products.filter((product) =>
      product.categories.some((category) => specialsInfo.discounts?.[category])
    );

    dispatch(specialsActions.setSpecialsItems(specialsItems));
  }, [allLoaded]);

  return (
    <Section as="aside" style={{ position: 'relative', overflow: 'hidden' }}>
      <Title>{allLoaded ? specialsInfo.title : 'Особые предложения'}</Title>
      {media.matches && (
        <SpecialsControls
          container={container.current}
          itemsCount={specialsItems.length}
        />
      )}
      <SpecialsWrapper as="section" ref={container} isTablet={!media.matches}>
        {specialsStatus === 'loading' &&
          [0, 1, 2, 3, 4].map((i) => <SpecialsItem key={i} loaded={false} />)}
        {allLoaded &&
          specialsItems.map((product) => (
            <SpecialsItem
              key={product.id}
              img={product.img.classic}
              title={product.title}
              price={product.price.small}
              loaded={allLoaded}
              isTablet={!media.matches}
            />
          ))}
      </SpecialsWrapper>
    </Section>
  );
}
