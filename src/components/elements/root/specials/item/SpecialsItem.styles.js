import styled from 'styled-components';

export const SpecialsItemStyled = styled.article`
  flex: 0 0 220px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 4px 16px -6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  ${({ isTablet }) => isTablet && 'scroll-snap-align: start'};
`;

export const ImgWrapper = styled.figure`
  flex: 0 0 auto;
  width: 80px;
  height: 80px;
  overflow: hidden;

  img {
    margin-left: 4px;
    margin-top: 3px;
  }
`;

export const InfoContainer = styled.div``;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 3px;
`;

export const Price = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
`;
