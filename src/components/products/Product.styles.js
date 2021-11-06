import styled from 'styled-components';
import Button from './../globalStyle/Button.styles';
import colors from './../globalStyle/variables/colors';

export const ProductStyled = styled.article`
  width: 200px;
`;

export const ImgCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* padding: 10px; */
  background-color: ${colors.secondary};

  img {
    width: 95%;
    margin-left: 5%;
  }
`;

export const Title = styled.h2``;

export const Ingredients = styled.p``;

export const Footer = styled.footer``;

export const Price = styled.p``;

export const AddButton = styled(Button)``;
