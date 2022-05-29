import { Button } from './SpecialsControls.styles';
import BtnRight from '@assets/icons/btnRight.svg';
import BtnLeft from '@assets/icons/btnLeft.svg';
import PropTypes from 'prop-types';
import { Fragment, useState, useRef, useEffect } from 'react';

export default function SpecialsControls(props) {
  const { itemsCount, container } = props;

  const [leftDisplayed, setLeftDisplayed] = useState(false);
  const [rightDisplayed, setRightDisplayed] = useState(false);

  const btnLeftRef = useRef();
  const btnRightRef = useRef();

  const currentIndex = useRef(0);
  const nextIndex = useRef(0);

  const elementWidth = 220;
  const maxDisplayedElems = useRef(0);

  const leftBtnClickHandler = () => {
    if (currentIndex.current === itemsCount - maxDisplayedElems.current)
      setRightDisplayed(true);

    nextIndex.current = --currentIndex.current;

    if (nextIndex.current === -1) nextIndex.current = 0;

    currentIndex.current = nextIndex.current;

    container.style.transform = `translateX(-${
      elementWidth * nextIndex.current
    }px)`;

    if (currentIndex.current === 0) setLeftDisplayed(false);
  };

  const rightBtnClickHandler = () => {
    if (currentIndex.current === 0) setLeftDisplayed(true);

    nextIndex.current = ++currentIndex.current;

    if (nextIndex.current === itemsCount) nextIndex.current = itemsCount - 1;

    currentIndex.current = nextIndex.current;

    container.style.transform = `translateX(-${
      elementWidth * nextIndex.current
    }px)`;

    if (currentIndex.current === itemsCount - maxDisplayedElems.current)
      setRightDisplayed(false);
  };

  const btnMouseOverHandler = (type) => {
    const offset = type === 'left' ? -30 : 30;

    container.style.transform = `translateX(${-(
      elementWidth * currentIndex.current +
      offset
    )}px)`;
  };

  const btnMouseOutHandler = () => {
    container.style.transform = `translateX(-${
      elementWidth * currentIndex.current
    }px)`;
  };

  useEffect(() => {
    if (!container) return;

    maxDisplayedElems.current = Math.floor(
      container.clientWidth / elementWidth
    );

    if (itemsCount >= maxDisplayedElems.current) setRightDisplayed(true);
  }, [container, itemsCount]);

  return (
    <Fragment>
      <Button
        aria-label="Previous button"
        type="left"
        ref={btnLeftRef}
        style={{ display: leftDisplayed ? 'block' : 'none' }}
        onClick={leftBtnClickHandler}
        onMouseOver={() => btnMouseOverHandler('left')}
        onMouseOut={btnMouseOutHandler}
      >
        <BtnLeft />
      </Button>
      <Button
        aria-label="Next button"
        type="right"
        ref={btnRightRef}
        style={{ display: rightDisplayed ? 'block' : 'none' }}
        onClick={rightBtnClickHandler}
        onMouseOver={() => btnMouseOverHandler('right')}
        onMouseOut={btnMouseOutHandler}
      >
        <BtnRight />
      </Button>
    </Fragment>
  );
}

SpecialsControls.propTypes = {
  itemsCount: PropTypes.number,
  container: PropTypes.object,
};
