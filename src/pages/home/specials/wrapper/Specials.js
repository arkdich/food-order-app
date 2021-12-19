import { useDispatch, useSelector } from 'react-redux';
import { Section, Title } from '@components/Section.styles';
import { SpecialsWrapper } from './Specials.styles';
import SpecialsItem from '../item/SpecialsItem';
import { useEffect, useRef } from 'react';
import {
  fetchSpecials,
  specialsActions,
} from '@store/slices/specialsSlice/specialsSlice';
import SpecialsControls from '../controls/SpecialsControls';
import useMatchMedia from '@hooks/useMatchMedia';

export default function Specials() {
  const {
    info: specialsInfo,
    status: specialsStatus,
    items: specialsItems,
  } = useSelector((state) => state.specials);

  const { items: productsItems, status: productsStatus } = useSelector(
    (state) => state.products
  );

  const media = useMatchMedia('only screen and (hover)');

  const container = useRef();

  const dispatch = useDispatch();

  const allLoaded =
    specialsStatus === 'success' && productsStatus === 'success';

  const specialsProducts =
    allLoaded && productsItems[specialsInfo.discounts.category];

  useEffect(() => {
    if (specialsStatus !== 'idle') return;

    dispatch(fetchSpecials());
  }, [dispatch, specialsStatus]);

  useEffect(() => {
    if (!allLoaded) return;

    if (Object.keys(specialsItems).length !== 0) return;

    dispatch(specialsActions.setSpecialsItems(specialsProducts));
  }, [dispatch, allLoaded, specialsProducts, specialsItems]);

  if (specialsStatus === 'error') return null;

  return (
    <Section as="aside" style={{ position: 'relative', overflow: 'hidden' }}>
      <Title>{allLoaded ? specialsInfo.title : 'Особые предложения'}</Title>
      {media.matches && (
        <SpecialsControls
          container={container.current}
          itemsCount={Object.keys(specialsItems).length}
        />
      )}
      <SpecialsWrapper as="section" ref={container} isTablet={!media.matches}>
        {specialsStatus === 'loading' &&
          [0, 1, 2, 3, 4].map((i) => (
            <SpecialsItem key={i} loaded={false} data-testid="loading-badge" />
          ))}
        {allLoaded &&
          specialsProducts
            .filter((product) => specialsItems[product.id])
            .map((product) => (
              <SpecialsItem
                key={product.id}
                id={product.id}
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
