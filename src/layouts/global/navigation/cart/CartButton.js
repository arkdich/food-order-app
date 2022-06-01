import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import {
  CartButtonStyled,
  Divider,
  Quantity,
  Total,
} from './CartButton.styles';

export default function CartButton() {
  const totalCount = useSelector((state) => state.cart.count);
  const totalCost = useSelector((state) => state.cart.cost);

  const router = useRouter();

  const cartClickHandler = () =>
    router.push('/?cart=shown', null, { shallow: true });

  const isEmpty = totalCost === 0;

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
