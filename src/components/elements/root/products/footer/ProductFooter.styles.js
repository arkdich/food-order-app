import styled from 'styled-components';
import Button from '@assets/styles/Button.styles';

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
  margin-top: ${(props) => (props.mobile ? '12px' : '0px')};
  color: #fff;
  background-color: #ffcc82;
  font-weight: 500;
`;
