import { useDispatch, useSelector } from 'react-redux';
import { Section, Title } from '../globalStyle/Section.styles';
import { SpecialsWrapper } from './Specials.styles';
import SpecialsItem from './SpecialsItem';
import { Button } from './Specials.styles';
import { ReactComponent as BtnRight } from './../../assets/btnRight.svg';
import { ReactComponent as BtnLeft } from './../../assets/btnLeft.svg';
import { useEffect, useRef } from 'react';
import { specialsActions } from './../../store/specialsSlice';

export default function Specials() {
  const {
    info: specialsInfo,
    status: specialsStatus,
    items: specialsItems,
  } = useSelector((state) => state.specials);

  const { items: products, status: productsStatus } = useSelector(
    (state) => state.products
  );

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

  const containerRef = useRef();
  const currentIndex = useRef(0);
  const itemsCount = specialsItems.length;

  const btnClickhandler = (ev) => {
    const btnType = ev.nativeEvent.srcElement.dataset.type;

    let nextIndex =
      btnType === 'left' ? --currentIndex.current : ++currentIndex.current;

    if (nextIndex === itemsCount) nextIndex = itemsCount - 1;

    if (nextIndex === -1) nextIndex = 0;

    currentIndex.current = nextIndex;

    const nextElement = containerRef.current.querySelector(
      `[data-index="${nextIndex}"]`
    );

    nextElement.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    });

    console.log(nextElement);
  };

  return (
    <Section as="aside" style={{ position: 'relative' }}>
      <Title>{allLoaded ? specialsInfo.title : 'Особые предложения'}</Title>
      <Button align="left" data-type="left" onClick={btnClickhandler}>
        <BtnLeft />
      </Button>
      <SpecialsWrapper as="section" ref={containerRef}>
        {specialsStatus === 'loading' &&
          [0, 1, 2, 3, 4].map((i) => <SpecialsItem key={i} loaded={false} />)}
        {allLoaded &&
          specialsItems.map((product, index) => (
            <SpecialsItem
              key={product.id}
              img={product.img.classic}
              title={product.title}
              price={product.price.small}
              loaded={allLoaded}
              data-index={index}
            />
          ))}
      </SpecialsWrapper>
      <Button align="right" data-type="right" onClick={btnClickhandler}>
        <BtnRight />
      </Button>
    </Section>
  );
}
