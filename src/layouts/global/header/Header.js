import {
  HeaderStyled,
  HeaderContainer,
  LogoStyled,
  Phone,
} from './Header.styles';
import Logo from '@assets/icons/logo.png';

export default function Header() {
  return (
    <HeaderStyled>
      <HeaderContainer maxWidth="1400px">
        <LogoStyled src={Logo.src} alt="Логотип" />
        <Phone>+7 800 555 3535</Phone>
      </HeaderContainer>
    </HeaderStyled>
  );
}
