import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 20;
  width: 100%;
  height: 200%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
`;

export const ProductPageStyled = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 900px;
  max-height: 700px;
  width: 90%;
  height: 90%;
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;
`;

export const ImgCont = styled.div``;

// export const ImgCont = styled.div``;
// export const ImgCont = styled.div``;
// export const ImgCont = styled.div``;
