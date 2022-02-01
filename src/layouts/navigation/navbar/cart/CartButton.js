import calcDiscountPrice from '@utils/formatters/calcDiscountPrice';
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
  const discounts = useSelector((state) => state.specials.items);

  const info = Object.values(items).reduce(
    (acc, curr) => {
      const price = products[curr.id].price[curr.size];
      const discount = discounts[curr.id];

      acc.totalCost +=
        (discount ? calcDiscountPrice(price, discount) : price) * curr.count;
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

  const isEmpty = items.length === 0;

  return (
    <CartButtonStyled onClick={cartClickHandler}>
      <Total>{`${info.totalCost} ₽`}</Total>
      <Divider />
      <Quantity
        data-testid="cart-item-count"
        style={isEmpty ? { fontSize: '1.1rem', fontWeight: '500' } : {}}
      >
        {isEmpty ? 'Корзина' : info.totalCount}
      </Quantity>
    </CartButtonStyled>
  );
}
