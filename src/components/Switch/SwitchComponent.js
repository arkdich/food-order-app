import PropTypes from 'prop-types';
import { useRef } from 'react';
import {
  SwitchBtn,
  Switch,
  SwitchComponentStyled,
} from './SwitchComponent.style';

export default function SwitchComponent(props) {
  const { labels = ['none', 'none'], offset = 0, loaded, clickHandler } = props;

  const switchRef = useRef();

  const btnClickHandler = (ev) => {
    const btnIndex = +ev.target.dataset.index;

    switchRef.current.style.transform = `translateX(calc(${
      100 * btnIndex
    }% + 4px))`;

    clickHandler(labels[btnIndex]);
  };

  return (
    <SwitchComponentStyled loaded={loaded}>
      <Switch
        ref={switchRef}
        style={{
          transform: `translateX(calc(${100 * offset}% + 4px))`,
          width: `calc(${100 / labels.length}% - 4px)`,
        }}
      />
      {loaded &&
        labels.map((label, index) => (
          <SwitchBtn key={index} data-index={index} onClick={btnClickHandler}>
            {label}
          </SwitchBtn>
        ))}
    </SwitchComponentStyled>
  );
}

SwitchComponent.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
  offset: PropTypes.number,
  loaded: PropTypes.bool,
  clickHandler: PropTypes.func,
};
