import styled from 'styled-components';
import breakpoints from '@utils/variables/breakpoints';

export const LoadingError = styled.h2`
  margin-top: 15px;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
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
