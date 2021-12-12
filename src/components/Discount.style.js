import styled from 'styled-components';
import colors from '@utils/variables/colors';

const Discount = styled.span`
  position: relative;

  &::before {
    position: absolute;
    ${({ place }) => {
      switch (place) {
        case 'top':
          return { top: '-6px', left: '0px' };
        case 'bottom':
          return { top: '25px', left: '0px' };
        default:
          return {};
      }
    }}
    content: '';
    width: 50px;
    height: 1px;
    transform: rotate(-8deg);
    background-color: ${colors.brand};
  }

  &::after {
    position: absolute;
    ${({ place }) => {
      switch (place) {
        case 'top':
          return { top: '-14px', left: '0px' };
        case 'bottom':
          return { top: '16px', left: '0px' };
        default:
          return {};
      }
    }}
    ${({ price }) => `content: 'от ${price} ₽'`};
    width: fit-content;
    font-size: 0.85rem;
    font-weight: 400;
    white-space: nowrap;
    color: ${colors.brand};
  }
`;

export default Discount;
