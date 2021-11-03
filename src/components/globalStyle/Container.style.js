import styled from 'styled-components';

const Container = styled.div`
  max-width: ${(props) => props.maxWidth ?? '1200px'};
  margin: auto;
`;

export default Container;
