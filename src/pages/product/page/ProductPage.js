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
  Overlay,
  ProductPageStyled,
  Title,
  Wrapper,
} from './ProductPage.styles';
import { ReactComponent as Placeholder } from '@assets/icons/placeholder.svg';
import { ReactComponent as Close } from '@assets/icons/close.svg';
import SwitchComponent from '@components/Switch/SwitchComponent';
import { cartActions } from '@store/slices/cartSlice/cartSlice';

export default function ProductPage() {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');

  const product = useSelector((state) => state.products.items[id]);
  const filter = useSelector((state) => state.products.filter);

  const loaded = !!product;

  const [productParams, setProductParams] = useState({
    id,
    type: 'classic',
    size: 'normal',
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

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const overlayClickHandler = () => navigate(`/?filter=${filter}`);

  const changeTypeHandler = (label) => {
    const type = label === 'Классическое' ? 'classic' : 'thin';

    setProductParams((state) => ({ ...state, type }));
  };

  const changeSizeHandler = (label) => {
    const size =
      label === 'Большая' ? 'large' : label === 'Средняя' ? 'normal' : 'small';

    setProductParams((state) => ({ ...state, size }));
  };

  const addItemHandler = () => {
    dispatch(cartActions.addItem(productParams));
  };

  return (
    <Wrapper>
      <Overlay data-testid="product-overlay" onClick={overlayClickHandler} />
      <ProductPageStyled>
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
            {`Добавить за ${product?.price[productParams.size]} ₽`}
          </AddButton>
        </InfoWrapper>
        <CloseBtn onClick={overlayClickHandler}>
          <Close />
        </CloseBtn>
      </ProductPageStyled>
    </Wrapper>
  );
}
