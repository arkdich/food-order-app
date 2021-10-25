import styled from 'styled-components';
import colors from '../globalStyle/variables/colors';

export const HeaderStyled = styled.header`
  width: 100%;
  padding: 12px 20px 6px 20px;
  background-color: ${colors.secondary};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  margin: auto;
`;
