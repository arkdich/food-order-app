import { Button } from './SpecialsControls.styles';
import { ReactComponent as BtnRight } from './../../assets/btnRight.svg';
import { ReactComponent as BtnLeft } from './../../assets/btnLeft.svg';
import PropTypes from 'prop-types';
import { Fragment, useState, useRef, useEffect } from 'react';

export default function SpecialsButton(props) {
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

SpecialsButton.propTypes = {
  itemsCount: PropTypes.number,
  container: PropTypes.object,
};
