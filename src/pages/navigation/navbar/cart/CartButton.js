import { useNavigate } from 'react-router';
import {
  CartButtonStyled,
  Divider,
  Quantity,
  Total,
} from './CartButton.styles';

export default function CartButton() {
  const navigate = useNavigate();

  const cartClickHandler = () => {
    navigate('/cart', { replace: true });
  };

  return (
    <CartButtonStyled onClick={cartClickHandler}>
      <Total>1290 ₽</Total>
      <Divider />
      <Quantity>2</Quantity>
    </CartButtonStyled>
  );
}
