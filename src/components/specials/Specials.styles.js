import styled from 'styled-components';
import Container from '../globalStyle/Container.style';

export const SpecialsWrapper = styled(Container)`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 5px;
  overflow: auto;
  scroll-snap-type: x mandatory;

  /* hide scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
