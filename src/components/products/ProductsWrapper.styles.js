import styled from 'styled-components';
import Container from '../globalStyle/Container.style';
import breakpoints from '../globalStyle/variables/breakpoints';

export const ProductsWrapperStyled = styled(Container)`
  padding: 15px 30px;
  padding-top: 20px;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 25px;
`;

export const ProductsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: stretch;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 20px;

  @media only screen and (max-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;
