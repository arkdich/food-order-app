import { useSelector } from 'react-redux';
import { CartStyled, Count } from './Cart.styles';
import cartIcon from '@assets/icons/shopping-cart.png';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Cart() {
  const router = useRouter();
  const count = useSelector((state) => state.cart.count);

  const btnClickHandler = () =>
    router.push('/?cart=shown', null, { shallow: true });

  return (
    <CartStyled onClick={btnClickHandler}>
      <Image src={cartIcon} alt="Корзина" />
      <Count>{count}</Count>
    </CartStyled>
  );
}
