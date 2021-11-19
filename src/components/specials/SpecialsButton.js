import { Button } from './SpecialsButton.styles';
import { ReactComponent as BtnRight } from './../../assets/btnRight.svg';
import { ReactComponent as BtnLeft } from './../../assets/btnLeft.svg';
import PropTypes from 'prop-types';

export default function SpecialsButton(props) {
  const { btnType, itemsCount, container, currentIndex } = props;

  const elementlWidth = 220;

  const btnClickhandler = () => {
    const btnLeft = container.parentElement.querySelector('[data-type="left"]');
    const btnRight = container.parentElement.querySelector(
      '[data-type="right"]'
    );

    const maxDisplayedElems = Math.floor(container.clientWidth / elementlWidth);

    let nextIndex;

    if (btnType === 'left') {
      if (currentIndex.current === itemsCount - maxDisplayedElems)
        btnRight.style.display = 'block';

      nextIndex = --currentIndex.current;
    }

    if (btnType === 'right') {
      if (currentIndex.current === 0) btnLeft.style.display = 'block';

      nextIndex = ++currentIndex.current;
    }

    if (nextIndex === itemsCount) nextIndex = itemsCount - 1;
    if (nextIndex === -1) nextIndex = 0;

    currentIndex.current = nextIndex;

    container.style.transform = `translateX(-${elementlWidth * nextIndex}px)`;

    if (currentIndex.current === itemsCount - maxDisplayedElems) {
      if (btnType === 'right') return (btnRight.style.display = 'none');
    }

    if (currentIndex.current === 0) {
      if (btnType == 'left') return (btnLeft.style.display = 'none');
    }
  };

  const btnMouseOverHandler = () => {
    const offset = btnType === 'left' ? -30 : 30;
    const elementWidth = elementlWidth;

    container.style.transform = `translateX(${-(
      elementWidth * currentIndex.current +
      offset
    )}px)`;
  };

  const btnMouseOutHandler = () => {
    container.style.transform = `translateX(-${
      elementlWidth * currentIndex.current
    }px)`;
  };

  const initial = currentIndex.current === 0 && btnType === 'left';

  return (
    <Button
      style={{ display: initial ? 'none' : 'block' }}
      data-type={btnType}
      onClick={btnClickhandler}
      onMouseOver={btnMouseOverHandler}
      onMouseOut={btnMouseOutHandler}
    >
      {btnType === 'left' ? <BtnLeft /> : <BtnRight />}
    </Button>
  );
}

SpecialsButton.propTypes = {
  btnType: PropTypes.string,
  itemsCount: PropTypes.number,
  container: PropTypes.object,
  currentIndex: PropTypes.object,
};
