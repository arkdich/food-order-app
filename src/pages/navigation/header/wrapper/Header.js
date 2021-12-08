import { HeaderStyled, HeaderContainer, LogoStyled } from './Header.styles';
import ProfileButton from '../profile/ProfileButton';
import { ReactComponent as Logo } from '@assets/logo.svg';

export default function Header() {
  return (
    <HeaderStyled>
      <HeaderContainer maxWidth="1400px">
        <LogoStyled as={Logo} />
        <ProfileButton />
      </HeaderContainer>
    </HeaderStyled>
  );
}
