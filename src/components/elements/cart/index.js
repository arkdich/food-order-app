import { Overlay, Wrapper } from '@assets/styles/Overlay.style';
import useDisableScroll from '@hooks/useDisableScroll';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import {
  BtnWrapper,
  CartStyled,
  Count,
  CountEntry,
  EmptyWrapper,
  OrderBtn,
  OrderWrapper,
  Summary,
  Title,
} from './Cart.styles';
import CartEntry from './entry/CartEntry';
import BackIcon from '@assets/icons/btnBack.svg';
import NextIcon from '@assets/icons/btnNext.svg';
import { useEffect, useState } from 'react';
import CartModal from './modal/CartModal';
import cartIcon from '@assets/icons/basket.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function CartPage() {
  const filter = useSelector((state) => state.products.filter);
  const items = useSelector((state) => state.cart.items);
  const totalCount = useSelector((state) => state.cart.count);
  const totalCost = useSelector((state) => state.cart.cost);

  const [modalShown, setModalShown] = useState(false);
  const [mounted, setMounted] = useState(false);

  const lastDigit = totalCount % 10;
  const title = `${totalCount} товар${
    totalCount >= 11 && totalCount <= 19
      ? 'ов'
      : lastDigit === 1
      ? ''
      : lastDigit === 2 || lastDigit === 3 || lastDigit === 4
      ? 'а'
      : 'ов'
  }`;

  const isEmpty = totalCount === 0;

  const router = useRouter();

  const overlayClickHandler = () =>
    router.push(`/?filter=${filter}`, null, { shallow: true });

  const orderBtnHandler = () => {
    if (isEmpty) return;

    setTimeout(() => {
      setModalShown(true);
    }, 500);
  };

  useDisableScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted &&
    createPortal(
      <Wrapper>
        <Overlay
          onClick={overlayClickHandler}
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
        <CartStyled
          as={motion.div}
          initial={{ transform: 'translateX(100%)' }}
          animate={{ transform: 'translateX(0%)' }}
          exit={{ transform: 'translateX(100%)' }}
          transition={{ duration: 0.1, ease: 'easeIn' }}
        >
          <OrderWrapper>
            {isEmpty && (
              <EmptyWrapper
                as={motion.div}
                initial={{ transform: 'translateY(-100%)' }}
                animate={{ transform: 'translateY(0%)' }}
                transition={{ delay: 0.15, duration: 0.3, ease: 'easeIn' }}
              >
                Ваша корзина пуста. Не стесняйтесь делать заказ!
                <Image src={cartIcon} alt="Пустая корзина" />
              </EmptyWrapper>
            )}

            <AnimatePresence>
              {items.map((item) => (
                <CartEntry
                  key={item.id + item.type + item.size}
                  id={item.id}
                  type={item.type}
                  size={item.size}
                  price={item.price}
                  img={item.img}
                  title={item.title}
                  count={item.count}
                  last={totalCount === 1}
                />
              ))}
            </AnimatePresence>
          </OrderWrapper>
          <Summary>
            <Title>{title}</Title>
            <Count>
              Сумма заказа <CountEntry>{totalCost} ₽</CountEntry>
            </Count>
            <BtnWrapper>
              <OrderBtn onClick={overlayClickHandler}>
                <BackIcon /> Назад
              </OrderBtn>
              <OrderBtn onClick={orderBtnHandler} disabled={isEmpty}>
                Заказать <NextIcon />
              </OrderBtn>
            </BtnWrapper>
          </Summary>
        </CartStyled>
        {modalShown && <CartModal />}
      </Wrapper>,
      document.getElementById('modal')
    )
  );
}
