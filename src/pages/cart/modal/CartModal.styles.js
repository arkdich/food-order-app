import styled from 'styled-components';

export const CartModalStyled = styled.div`
  position: absolute;
  z-index: 18;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 200px;
  padding: 25px;
  background-color: #fff;
  border-radius: 30px;
  text-align: center;

  img {
    display: block;
    width: 130px;
    margin: 12px auto 0px auto;
  }

  @media only screen and (max-width: 510px) {
    width: 80%;
  }
`;

export const Text = styled.span`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 300;
`;
