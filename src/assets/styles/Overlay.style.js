import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: 15;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
`;
