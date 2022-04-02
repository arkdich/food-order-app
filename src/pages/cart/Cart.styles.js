import colors from '@utils/variables/colors';
import styled from 'styled-components';
import Btn from '@assets/styles/Button.styles';

export const CartStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100%;
  transition: transform 200ms ease-out;
  background-color: ${colors.primary};
`;

export const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  padding: 15px;
  background-color: ${colors.secondary};
  box-shadow: -4px 0px 4px 4px #00000008;
`;

export const Title = styled.span`
  text-align: center;
  font-size: 1.2rem;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    margin-top: 15px;
    margin-bottom: 20px;
    background-color: #00000020;
  }
`;

export const Count = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const CountEntry = styled.span``;

export const OrderBtn = styled(Btn)`
  width: 70%;
  margin: 10px auto;
  font-size: 1.3rem;
  font-weight: 500;
  color: #fff;
  background-color: ${colors.brand};
`;
