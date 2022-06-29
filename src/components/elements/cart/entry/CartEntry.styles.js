import styled from 'styled-components';

export const CartEntryStyled = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 20px;
  background-color: #fff;
`;

export const Left = styled.div`
  flex: 0 0 120px;
  height: 120px;

  img {
    margin-top: 4%;
    margin-left: 4%;
  }
`;

export const Right = styled.div`
  width: 100%;
  margin-top: 10px;
`;

export const Title = styled.p``;

export const Info = styled.p`
  margin-top: 3px;
  font-size: 1rem;
  font-weight: 350;
`;

export const PriceWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  padding: 0px 5px;
`;

export const Price = styled.p``;
