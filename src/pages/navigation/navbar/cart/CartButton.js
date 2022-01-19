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
  const products = useSelector((state) => state.products.items);

  const info = Object.values(items).reduce(
    (acc, curr) => {
      acc.totalCost += products[curr.id].price[curr.size] * curr.count;
      acc.totalCount += curr.count;

      return acc;
    },
    {
      totalCost: 0,
      totalCount: 0,
    }
  );

  const navigate = useNavigate();

  const cartClickHandler = () => {
    navigate('/cart', { replace: true });
  };

  return (
    <CartButtonStyled onClick={cartClickHandler}>
      <Total>{`${info.totalCost} ₽`}</Total>
      <Divider />
      <Quantity data-testid="cart-item-count">
        {items.length === 0 ? 'Корзина' : info.totalCount}
      </Quantity>
    </CartButtonStyled>
  );
}
