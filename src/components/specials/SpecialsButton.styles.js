import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  z-index: 2;
  bottom: 22px;
  ${(props) => (props['data-type'] === 'left' ? 'left: 5px' : 'right: 5px')};
  width: 100px;
  height: 100px;
  padding: 30px;
  border-style: none;
  background-color: transparent;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;
