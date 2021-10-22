import styled from 'styled-components';

export const Button = styled.button`
  width: 90px;
  height: 40px;
  border-style: none;
  border-radius: 20px;
  font-family: inherit;
  color: inherit;
  background-color: ${(props) => props.bg ?? '#fff'};
  cursor: pointer;
`;
