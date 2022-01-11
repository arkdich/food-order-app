import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ImgCont,
  Overlay,
  ProductPageStyled,
  Wrapper,
} from './ProductPage.styles';
import img from '@assets/icons/placeholder.svg';

export default function ProductPage() {
  const params = useParams();

  const product = useSelector((state) =>
    state.products.items.pizzas.find((p) => p.id === params.id)
  );

  const navigate = useNavigate();

  const overlayClickHandler = () => navigate(-1);

  return (
    <Wrapper>
      <Overlay onClick={overlayClickHandler} />
      <ProductPageStyled>
        <ImgCont>
          <img src={img} alt={`Пицца ${product?.title}`} />
        </ImgCont>
      </ProductPageStyled>
    </Wrapper>
  );
}
