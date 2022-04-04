import { Overlay, Wrapper } from '@assets/styles/Overlay.style';
import useDisableScroll from '@hooks/useDisableScroll';
import { motion } from 'framer-motion/dist/framer-motion';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  BtnWrapper,
  CartStyled,
  Count,
  CountEntry,
  OrderBtn,
  OrderWrapper,
  Summary,
  Title,
} from './Cart.styles';
import CartEntry from './entry/CartEntry';
import { ReactComponent as BackIcon } from '@assets/icons/btnBack.svg';
import { ReactComponent as NextIcon } from '@assets/icons/btnNext.svg';

export default function Cart() {
  const filter = useSelector((state) => state.products.filter);
  const items = useSelector((state) => state.cart.items);
  const totalCount = useSelector((state) => state.cart.count);
  const totalCost = useSelector((state) => state.cart.cost);

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

  const navigate = useNavigate();

  const overlayClickHandler = () => navigate(`/?filter=${filter}`);

  useDisableScroll();

  return createPortal(
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
          {items.map((item, index) => (
            <CartEntry
              key={index}
              id={item.id}
              type={item.type}
              size={item.size}
              price={item.price}
              img={item.img}
              title={item.title}
              count={item.count}
            />
          ))}
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
            <OrderBtn>
              Заказать <NextIcon />
            </OrderBtn>
          </BtnWrapper>
        </Summary>
      </CartStyled>
    </Wrapper>,
    document.getElementById('modal')
  );
}
