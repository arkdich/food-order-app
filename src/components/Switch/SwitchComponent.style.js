import styled from 'styled-components';
import Button from '@components/Button.styles';
import colors from '@utils/variables/colors';
import PlaceholderBG from '@components/Placeholder.style';

export const SwitchComponentStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;
  margin-top: 15px;
  margin-bottom: 10px;
  border-radius: 15px;
  background-color: ${colors.primary};

  & + & {
    margin-top: 0px;
  }

  ${({ loaded }) => !loaded && PlaceholderBG}
`;

export const Switch = styled.div`
  position: absolute;
  z-index: 0;
  height: calc(100% - 6px);
  border-radius: 12px;
  background-color: ${colors.secondary};
  transition: transform 300ms ease;
`;

export const SwitchBtn = styled(Button)`
  position: relative;
  z-index: 1;
  flex: 1 1 0;
  padding: 8px 0px;
  font-size: 1rem;
  background-color: transparent;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
