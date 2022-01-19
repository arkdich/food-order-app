import PropTypes from 'prop-types';
import { useRef } from 'react';
import {
  SwitchBtn,
  Switch,
  SwitchComponentStyled,
} from './SwitchComponent.style';

export default function SwitchComponent(props) {
  const { labels, offset = 0, loaded, clickHandler } = props;

  if (!labels) throw new Error('Labeles property cannot be omited');
  if (labels && labels.length < 2)
    throw new Error('There must be at least two labels');

  const switchRef = useRef();

  const btnClickHandler = (ev) => {
    const btnIndex = +ev.target.dataset.index;

    switchRef.current.style.transform = `translateX(calc(${100 * btnIndex}% + ${
      btnIndex > 1 ? btnIndex * 4 : 4
    }px))`;

    if (clickHandler) clickHandler(labels[btnIndex].label);
  };

  return (
    <SwitchComponentStyled loaded={loaded}>
      <Switch
        data-testid={'switch-block'}
        ref={switchRef}
        style={{
          transform: `translateX(calc(${100 * offset}% + 4px))`,
          width: `calc(${100 / labels.length}% - 4px)`,
        }}
      />
      {loaded &&
        labels.map(({ label, disabled }, index) => (
          <SwitchBtn
            key={index}
            data-index={index}
            disabled={disabled}
            onClick={btnClickHandler}
          >
            {label}
          </SwitchBtn>
        ))}
    </SwitchComponentStyled>
  );
}

SwitchComponent.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.object),
  offset: PropTypes.number,
  loaded: PropTypes.bool,
  clickHandler: PropTypes.func,
};
