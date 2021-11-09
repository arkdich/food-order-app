import styled from 'styled-components';
import colors from './../globalStyle/variables/colors';
import breakpoints from '../globalStyle/variables/breakpoints';

export const Header = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;

  img {
    width: 100%;
    margin-left: 6.5%;
  }
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
`;

export const Ingredients = styled.p`
  margin-top: 10px;
  margin-bottom: 15px;
  font-size: 0.9rem;
  font-weight: 300;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 1 content;
`;

export const ProductStyled = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 15px;
  border-radius: 10px;
  background-color: ${colors.secondary};
  overflow: hidden;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    column-gap: 5px;

    ${Header} {
      width: 135px;
      height: 135px;

      img {
        margin-left: 0;
      }
    }

    ${Body} {
      width: 200px;
    }
  }
`;
