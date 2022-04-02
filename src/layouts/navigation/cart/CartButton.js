import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  CartButtonStyled,
  Divider,
  Quantity,
  Total,
} from './CartButton.styles';

export default function CartButton() {
  const items = useSelector((state) => state.cart.items);
  const totalCount = useSelector((state) => state.cart.count);
  const totalCost = useSelector((state) => state.cart.cost);

  console.log('fff');
  const navigate = useNavigate();

  const cartClickHandler = () => {
    navigate('/cart', { replace: true });
  };

  const isEmpty = items.length === 0;

  return (
    <CartButtonStyled onClick={cartClickHandler}>
      <Total>{`${totalCost} ₽`}</Total>
      <Divider />
      <Quantity
        data-testid="cart-item-count"
        style={isEmpty ? { fontSize: '1.1rem', fontWeight: '500' } : {}}
      >
        {isEmpty ? 'Корзина' : totalCount}
      </Quantity>
    </CartButtonStyled>
  );
}
