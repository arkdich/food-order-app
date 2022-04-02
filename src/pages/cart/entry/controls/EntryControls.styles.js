import colors from '@utils/variables/colors';
import styled from 'styled-components';

export const EntryControlsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  font-size: 1.2rem;
  background-color: ${colors.primary};
  border-radius: 20px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  border-style: none;
  background-color: transparent;
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;
