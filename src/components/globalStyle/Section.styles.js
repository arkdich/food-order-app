import styled from 'styled-components';
import Container from '../globalStyle/Container.style';
import breakpoints from '../globalStyle/variables/breakpoints';

export const Section = styled(Container)`
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
  margin-bottom: 20px;
  margin-left: 8px;
`;
