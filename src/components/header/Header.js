import Logo from '../navigation/Logo';
import { HeaderStyled, HeaderContainer } from './Header.styles';
import ProfileButton from './ProfileButton';

export default function Header() {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <Logo />
        <ProfileButton />
      </HeaderContainer>
    </HeaderStyled>
  );
}
