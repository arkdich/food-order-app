import { useSelector } from 'react-redux';
import { CartStyled, Count } from './Cart.styles';
import cartIcon from '@assets/icons/shopping-cart.png';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const router = useRouter();

  const count = Object.values(items).reduce((acc, curr) => acc + curr.count, 0);

  const btnClickHandler = () => router.push('/cart');

  return (
    <CartStyled onClick={btnClickHandler}>
      <Image src={cartIcon} alt="Корзина" />
      <Count>{count}</Count>
    </CartStyled>
  );
}
