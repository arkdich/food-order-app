import { Img, ImgWrapper, SubTitle, Title, Wrapper } from './Logo.styles';
import logo from './../../assets/logo.png';

export default function Logo() {
  return (
    <Wrapper>
      <ImgWrapper>
        <Img src={logo} alr="Company Logo" />
      </ImgWrapper>
      <div>
        <Title>Доставка пиццы</Title>
        <SubTitle>Лучшая в вашем городе</SubTitle>
      </div>
    </Wrapper>
  );
}
