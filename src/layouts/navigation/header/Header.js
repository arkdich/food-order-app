import { HeaderStyled, HeaderContainer, LogoStyled } from './Header.styles';
import { ReactComponent as Logo } from '@assets/icons/logo.svg';
import CartButton from '../navbar/cart/CartButton';

export default function Header() {
  return (
    <HeaderStyled>
      <HeaderContainer maxWidth="1400px">
        <LogoStyled as={Logo} />
        <CartButton />
      </HeaderContainer>
    </HeaderStyled>
  );
}
