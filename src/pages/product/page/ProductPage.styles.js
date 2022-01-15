import PlaceholderBG from '@components/Placeholder.style';
import breakpoints from '@utils/variables/breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 20;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 200%;
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
  max-height: 500px;
  width: 80%;
  height: 80%;
  background-color: #fff;
  border-radius: 15px;

  @media only screen and (max-width: ${breakpoints.phone}) {
    grid-template-columns: 1fr;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 85%;
    margin-left: 6.5%;
  }
`;

export const InfoWrapper = styled.div`
  padding: 40px 20px;
  border-radius: 15px;
  background-color: #fcfcfc;
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 400;

  ${({ loaded }) => !loaded && PlaceholderBG}
  ${({ loaded }) =>
    !loaded && { width: '180px', height: '30px', borderRadius: '10px' }}
`;

export const Info = styled.h4`
  margin-top: 2px;
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: 300;

  ${({ loaded }) => !loaded && PlaceholderBG}
  ${({ loaded }) =>
    !loaded && {
      width: '280px',
      height: '30px',
      borderRadius: '10px',
      marginTop: '12px',
    }}
`;

export const Ingredients = styled.p`
  font-weight: 400;
  font-size: 1rem;

  ${({ loaded }) => !loaded && PlaceholderBG}
  ${({ loaded }) =>
    !loaded && { width: '100%', height: '60px', borderRadius: '10px' }}
`;

export const CloseBtn = styled.button`
  position: absolute;
  z-index: 1;
  top: 8px;
  right: -56px;
  width: 48px;
  height: 48px;
  padding: 8px;
  border-style: none;
  background-color: transparent;
  transition: transform 100ms ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(0.95);
  }
`;
