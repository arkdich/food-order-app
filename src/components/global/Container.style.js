import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${(props) => props.maxWidth ?? '1200px'};
`;
