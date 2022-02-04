import {
  HeaderStyled,
  HeaderContainer,
  LogoStyled,
  Phone,
} from './Header.styles';
import { ReactComponent as Logo } from '@assets/icons/logo.svg';

export default function Header() {
  return (
    <HeaderStyled>
      <HeaderContainer maxWidth="1400px">
        <LogoStyled as={Logo} />
        <Phone>+7 800 555 3535</Phone>
      </HeaderContainer>
    </HeaderStyled>
  );
}
