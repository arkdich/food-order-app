import { Overlay, Wrapper } from '@assets/styles/Overlay.style';
import useDisableScroll from '@hooks/useDisableScroll';
import { motion } from 'framer-motion/dist/framer-motion';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CartStyled } from './Cart.styles';

export default function Cart() {
  const filter = useSelector((state) => state.products.filter);
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
      ></CartStyled>
    </Wrapper>,
    document.getElementById('modal')
  );
}
