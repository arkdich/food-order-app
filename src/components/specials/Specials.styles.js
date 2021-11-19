import styled from 'styled-components';
import Container from '../globalStyle/Container.style';
import breakpoints from '../globalStyle/variables/breakpoints';

export const SpecialsWrapper = styled(Container)`
  z-index: 1;
  display: flex;
  flex-direction: row;
  gap: 10px;
  min-height: 114px;
  padding: 5px;
  margin-left: -30px;
  margin-right: -30px;
  transition: transform 0.4s ease-in;

  /* hide scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    margin-right: 0;
  }
`;
