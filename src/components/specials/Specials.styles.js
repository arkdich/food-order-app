import styled from 'styled-components';
import Container from '../globalStyle/Container.style';
import breakpoints from '../globalStyle/variables/breakpoints';

export const SpecialsWrapper = styled(Container)`
  z-index: 1;
  display: flex;
  flex-direction: row;
  gap: 10px;
  min-height: 114px;
  margin-left: -20px;
  margin-right: -20px;
  transition: transform 0.4s ease-in;
  ${({ isTablet }) =>
    isTablet && 'overflow: auto; scroll-snap-type: x mandatory'};

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
