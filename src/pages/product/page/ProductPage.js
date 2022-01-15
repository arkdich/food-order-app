import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
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

export default function ProductPage() {
  const params = new URLSearchParams(window.location.search);

  const product = useSelector((state) =>
    state.products.items.pizzas.find((p) => p.id === params.get('id'))
  );

  const [productParams, setProductParams] = useState({
    id: product?.id,
    type: 'classic',
    size: 'normal',
  });

  const productOptions = {
    type: {
      classic: 'традиционное тесто',
      thin: `тонкое тесто`,
    },
    size: {
      small: `25 см`,
      normal: `30 см`,
      large: `35 см`,
    },
  };

  const infoOutput =
    product &&
    `${productOptions.size[productParams.size]}, ${
      productOptions.type[productParams.type]
    }, ${product.style[productParams.type][productParams.size]} г`;

  const imgOutput = product ? (
    <img src={product.img[productParams.type]} alt={`Пицца ${product.title}`} />
  ) : (
    <Placeholder />
  );

  const loaded = !!product;

  const navigate = useNavigate();

  const overlayClickHandler = () => navigate(-1);

  return (
    <Wrapper>
      <Overlay onClick={overlayClickHandler} />
      <ProductPageStyled>
        <ImgWrapper>{imgOutput}</ImgWrapper>
        <InfoWrapper>
          <Title loaded={loaded}>{product?.title}</Title>
          <Info loaded={loaded}>{infoOutput}</Info>
          <Ingredients loaded={loaded}>
            {product?.ingredients.join(`, `)}
          </Ingredients>
        </InfoWrapper>
        <CloseBtn onClick={overlayClickHandler}>
          <Close />
        </CloseBtn>
      </ProductPageStyled>
    </Wrapper>
  );
}
