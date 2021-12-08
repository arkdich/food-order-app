import styled from 'styled-components';
import Button from '@components/Button.styles';
import colors from '@utils/variables/colors';

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const Price = styled.p`
  font-size: 1.1rem;
`;

export const AddButton = styled(Button)`
  color: #fff;
  background-color: ${colors.brand};
`;