import styled from 'styled-components';

const Container = styled.div`
  max-width: ${(props) => props.maxWidth ?? '1300px'};
  margin: auto;
`;

export default Container;
