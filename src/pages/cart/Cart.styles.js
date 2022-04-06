import colors from '@utils/variables/colors';
import styled from 'styled-components';
import Btn from '@assets/styles/Button.styles';

export const CartStyled = styled.div`
  position: absolute;
  z-index: 16;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100%;
  transition: transform 200ms ease-out;
  background-color: ${colors.primary};

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  padding: 15px;
`;

export const Summary = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  padding: 15px;
  background-color: ${colors.secondary};
  box-shadow: -4px 0px 8px 6px #00000012;
`;

export const Title = styled.span`
  font-weight: 500;
  font-size: 1.2rem;

  &::after {
    content: '';
    display: block;
    width: 50%;
    height: 1px;
    margin-top: 12px;
    margin-bottom: 10px;
    background-color: #00000030;
  }
`;

export const Count = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 14px;
`;

export const CountEntry = styled.span``;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OrderBtn = styled(Btn)`
  position: relative;
  flex: 0 0 160px;
  margin: 10px auto;
  font-size: 1.3rem;
  font-weight: 400;
  border-radius: 40px;
  color: #fff;
  background-color: ${colors.brand};

  svg {
    position: absolute;
    top: 11px;
    right: 10px;
  }

  &:first-of-type {
    svg {
      right: unset;
      left: 10px;
    }
  }
`;
