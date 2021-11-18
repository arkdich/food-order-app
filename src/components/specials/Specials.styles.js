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

export const Button = styled.button`
  position: absolute;
  /* top: 50%; */
  top: 15px;
  ${({ align }) => (align === 'left' ? 'left: 10px' : 'right: 10px')};
  /* transform: translateY(-50%); */
  width: 100px;
  height: 100px;
  padding: 30px;
  border-style: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    /* position: absolute; */
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;
