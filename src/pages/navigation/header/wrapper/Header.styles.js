import styled from 'styled-components';
import Container from '@components/Container.style';
import colors from '@utils/variables/colors';

export const HeaderStyled = styled.header`
  width: 100%;
  padding: 12px 24px 6px 20px;
  background-color: ${colors.secondary};
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoStyled = styled.svg`
  flex: 0 0 240px;

  @media only screen and (max-width: 436px) {
    flex-basis: 220px;
  }
`;
