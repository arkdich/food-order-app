import { useSelector } from 'react-redux';
import { CartStyled, Count, Icon } from './Cart.styles';
import cartIcon from '@assets/icons/shopping-cart.png';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const count = Object.values(items).reduce((acc, curr) => acc + curr.count, 0);

  const btnClickHandler = () => navigate('/cart');

  return (
    <CartStyled onClick={btnClickHandler}>
      <Icon src={cartIcon} />
      <Count>{count}</Count>
    </CartStyled>
  );
}
