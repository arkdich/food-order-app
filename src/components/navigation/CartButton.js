import {
  CartButtonStyled,
  Divider,
  Quantity,
  Total,
} from './CartButton.styles';

export default function CartButton() {
  return (
    <CartButtonStyled bg={'#ff6900'}>
      <Total>1290 Р</Total>
      <Divider />
      <Quantity>2</Quantity>
    </CartButtonStyled>
  );
}
