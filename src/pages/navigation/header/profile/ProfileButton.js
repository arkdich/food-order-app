import { ProfileButtonStyled } from './ProfileButton.styles';
import { useNavigate } from 'react-router';

export default function ProfileButton() {
  const navigate = useNavigate();

  const profileClickHandler = () => {
    navigate('/profile', { replace: true });
  };

  return (
    <ProfileButtonStyled onClick={profileClickHandler}>
      Войти
    </ProfileButtonStyled>
  );
}
