import {
  CartButtonStyled,
  Divider,
  Quantity,
  Total,
} from './CartButton.styles';

export default function CartButton() {
  return (
    <CartButtonStyled>
      <Total>1290 ₽</Total>
      <Divider />
      <Quantity>2</Quantity>
    </CartButtonStyled>
  );
}
