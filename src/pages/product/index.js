import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AddButton,
  CloseBtn,
  ImgWrapper,
  Info,
  InfoWrapper,
  Ingredients,
  ProductPageStyled,
  Title,
} from './Product.styles';
import { ReactComponent as Placeholder } from '@assets/icons/placeholder.svg';
import { ReactComponent as Close } from '@assets/icons/close.svg';
import SwitchComponent from '@components/Switch/SwitchComponent';
import { cartActions } from '@store/slices/cart/cartSlice';
import calcDiscountPrice from '@utils/formatters/calcDiscountPrice';
import { Wrapper, Overlay } from '@assets/styles/Overlay.style';
import { createPortal } from 'react-dom';
import useDisableScroll from '@hooks/useDisableScroll';
import { motion } from 'framer-motion/dist/framer-motion';

export default function Product() {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');

  const product = useSelector((state) => state.products.items[id]);
  const filter = useSelector((state) => state.products.filter);
  const discounts = useSelector((state) => state.specials.items);

  const loaded = !!product;

  const [productParams, setProductParams] = useState({
    id,
    title: product?.title,
    type: 'classic',
    size: 'normal',
    img: product?.img['classic'],
  });

  const productOptions = {
    type: {
      classic: 'традиционное',
      thin: `тонкое`,
    },
    size: {
      small: `25 см`,
      normal: `30 см`,
      large: `35 см`,
    },
  };

  const labels = {
    type: [
      {
        label: `Классическое`,
      },
      {
        label: `Тонкое`,
        disabled: productParams.size === 'small',
      },
    ],
    size: [
      {
        label: `Маленькая`,
        disabled: productParams.type === 'thin',
      },
      {
        label: `Средняя`,
      },
      {
        label: `Большая`,
      },
    ],
  };

  const infoOutput =
    product &&
    `${productOptions.size[productParams.size]}, ${
      productOptions.type[productParams.type]
    }, ${product.style[productParams.type][productParams.size]} г`;

  const imgOutput = product ? (
    <img src={product.img[productParams.type]} alt={`Пицца ${product.title}`} />
  ) : (
    <Placeholder style={{ width: '100%' }} />
  );

  const price = product?.price[productParams.size];
  const priceOutput = discounts[id]
    ? calcDiscountPrice(price, discounts[id])
    : price;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const overlayClickHandler = () => navigate(`/?filter=${filter}`);

  const changeTypeHandler = (label) => {
    const type = label === 'Классическое' ? 'classic' : 'thin';

    setProductParams((state) => ({ ...state, type, img: product.img[type] }));
  };

  const changeSizeHandler = (label) => {
    const size =
      label === 'Большая' ? 'large' : label === 'Средняя' ? 'normal' : 'small';

    setProductParams((state) => ({ ...state, size }));
  };

  const addItemHandler = () => {
    dispatch(cartActions.addItem({ ...productParams, price: priceOutput }));
  };

  useDisableScroll();

  return createPortal(
    <Wrapper>
      <Overlay
        data-testid="product-overlay"
        onClick={overlayClickHandler}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'linear' }}
      />
      <ProductPageStyled
        as={motion.div}
        initial={{ opacity: 0, transform: 'translate(-50%,-50%) scale(0.5)' }}
        animate={{ opacity: 1, transform: 'translate(-50%,-50%) scale(1)' }}
        exit={{ opacity: 0, transform: 'translate(-50%,-50%) scale(0.5)' }}
        transition={{ duration: 0.2, ease: 'easeIn' }}
      >
        <ImgWrapper>{imgOutput}</ImgWrapper>
        <InfoWrapper>
          <Title loaded={loaded}>{product?.title}</Title>
          <Info loaded={loaded}>{infoOutput}</Info>
          <Ingredients loaded={loaded}>
            {product?.ingredients.join(`, `)}
          </Ingredients>
          <SwitchComponent
            labels={labels.type}
            loaded={loaded}
            clickHandler={changeTypeHandler}
          />
          <SwitchComponent
            labels={labels.size}
            offset={1}
            loaded={loaded}
            clickHandler={changeSizeHandler}
          />
          <AddButton
            loaded={loaded}
            disabled={!loaded}
            onClick={addItemHandler}
          >
            {`Добавить за ${priceOutput} ₽`}
          </AddButton>
        </InfoWrapper>
        <CloseBtn onClick={overlayClickHandler}>
          <Close />
        </CloseBtn>
      </ProductPageStyled>
    </Wrapper>,
    document.getElementById('modal')
  );
}
