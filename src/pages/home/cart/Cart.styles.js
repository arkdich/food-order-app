import colors from '@utils/variables/colors';
import styled from 'styled-components';

export const CartStyled = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 65px;
  height: 65px;
  padding: 14px;
  background-color: ${colors.secondary};
  border-style: none;
  border-radius: 50%;
  box-shadow: 0px 0px 10px 6px rgba(0, 0, 0, 0.05);

  &:active {
    transform: scale(0.95);
  }
`;

export const Icon = styled.img``;

export const Count = styled.div`
  position: absolute;
  top: -6px;
  right: -5px;
  font-size: 0.9rem;
  padding: 3px 8px;
  border-radius: 50%;
  color: #fff;
  background-color: ${colors.brand};
`;
