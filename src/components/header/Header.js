import Logo from '../navigation/Logo';
import { HeaderStyled, HeaderContainer } from './Header.styles';
import ProfileButton from './ProfileButton';

export default function Header() {
  return (
    <HeaderStyled>
      <HeaderContainer maxWidth="1400px">
        <Logo />
        <ProfileButton />
      </HeaderContainer>
    </HeaderStyled>
  );
}
