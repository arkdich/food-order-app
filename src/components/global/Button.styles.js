import styled from 'styled-components';

export const Button = styled.button`
  width: 80px;
  height: 40px;
  border-style: none;
  border-radius: 15px;
  background-color: ${(props) => props.bg ?? '#fff'};
`;
