/* eslint-disable @next/next/no-img-element */
import { Overlay } from '@assets/styles/Overlay.style';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { CartModalStyled, Text } from './CartModal.styles';
import LoadingSpinner from '@assets/icons/cartSpinner.svg';
import checkMark from '@assets/icons/cartReady.gif';
import { cartActions } from '@store/slices/cart/cartSlice';
import { useRouter } from 'next/router';

export default function CartModal() {
  const filter = useSelector((state) => state.products.filter);
  const [isReady, setIsReady] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const overlayClickHandler = () => {
    if (isReady) router.push(`/?filter=${filter}`, null, { shallow: true });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
      dispatch(cartActions.emptyCart());
    }, 3000);
  }, [dispatch]);

  return (
    <Fragment>
      <Overlay
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ zIndex: 17 }}
        onClick={overlayClickHandler}
      />
      <CartModalStyled
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isReady ? (
          <Fragment>
            <Text>Готово! Ожидайте доставки в течении 30 минут</Text>
            <img src={checkMark.src + '?' + Date.now()} alt="Check mark" />
          </Fragment>
        ) : (
          <Fragment>
            <Text>Обрабатываем ваш заказ</Text>
            <LoadingSpinner />
          </Fragment>
        )}
      </CartModalStyled>
    </Fragment>
  );
}
