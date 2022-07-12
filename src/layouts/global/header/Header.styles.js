import styled from 'styled-components';
import Container from '@assets/styles/Container.style';
import colors from '@utils/variables/colors';
import breakpoints from '@utils/variables/breakpoints';

export const HeaderStyled = styled.header`
  width: 100%;
  padding: 8px 20px;
  background-color: ${colors.secondary};

  @media only screen and (max-width: ${breakpoints.phone}) {
    padding-left: 10px;
    padding-right: 14px;
  }
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoStyled = styled.img`
  width: 240px;

  @media only screen and (max-width: ${breakpoints.phone}) {
    width: 210px;
  }
`;

export const Phone = styled.span`
  position: relative;
  margin-top: 15px;

  &:before {
    content: 'Заказ по телефону';
    position: absolute;
    top: -16px;
    left: -20px;
    width: 146px;
    font-size: 1rem;
    opacity: 0.6;
  }

  @media only screen and (max-width: ${breakpoints.phone}) {
    font-size: 0.9rem;

    &:before {
      top: -14px;
      left: -12px;
      width: 116px;
      font-size: 0.8rem;
    }
  }
`;
