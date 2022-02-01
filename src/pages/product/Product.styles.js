import Button from '@assets/styles/Button.styles';
import PlaceholderBG from '@assets/styles/Placeholder.style';
import breakpoints from '@utils/variables/breakpoints';
import colors from '@utils/variables/colors';
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
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
`;

export const ProductPageStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px;
  max-width: 900px;
  max-height: 500px;
  width: 80%;
  height: 80%;
  background-color: #fff;
  border-radius: 15px;

  @media only screen and (orientation: portrait) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.7fr auto;
    height: unset;
    max-height: unset;
  }

  @media only screen and (max-width: ${breakpoints.phone}),
    (max-height: 480px) {
    width: 100%;
    height: 100%;
    padding: 10px;
    border-radius: 0;
  }
`;

export const ImgWrapper = styled.figure`
  max-width: 380px;
  margin: auto;

  img {
    margin-left: 2.5%;
    margin-top: 4%;
  }

  @media only screen and (max-width: ${breakpoints.phone}) {
    width: 270px;
  }
`;

export const InfoWrapper = styled.div`
  padding: 40px 20px;
  border-radius: 15px;
  background-color: #fcfcfc;

  @media only screen and (max-width: 960px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media only screen and (max-width: ${breakpoints.phone}) {
    padding: 10px;
  }
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

  @media only screen and (max-width: 960px) {
    top: 12px;
    right: 16px;
    padding: 12px;
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.15);
    background-color: ${colors.brand};
  }
`;

export const AddButton = styled(Button)`
  display: block;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 30px auto 0px auto;
  font-weight: 500;
  color: #fff;
  background-color: ${colors.brand};
  transition: transform 200ms ease;

  &:active {
    transform: scale(0.95);
  }

  ${({ loaded }) => !loaded && PlaceholderBG}
  ${({ loaded }) => !loaded && { color: 'transparent' }}
`;
