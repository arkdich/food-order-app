import styled from 'styled-components';
import Container from '../globalStyle/Container.style';
import colors from '../globalStyle/variables/colors';

export const HeaderStyled = styled.header`
  width: 100%;
  padding: 12px 20px 6px 20px;
  background-color: ${colors.secondary};
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
