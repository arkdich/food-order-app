import PropTypes from 'prop-types';
import { Button, EntryControlsStyled } from './EntryControls.styles';
import { ReactComponent as AddIcon } from '@assets/icons/plus.svg';
import { ReactComponent as RemoveIcon } from '@assets/icons/minus.svg';
import { useDispatch } from 'react-redux';
import { cartActions } from '@store/slices/cart/cartSlice';

export default function EntryControls(props) {
  const { id, size, type, count, price } = props;

  const dispatch = useDispatch();

  const addBtnHandler = () => {
    dispatch(cartActions.addItem({ id, type, size, price }));
  };

  const removeBtnHandler = () => {
    dispatch(cartActions.removeItem({ id, type, size }));
  };

  return (
    <EntryControlsStyled>
      <Button onClick={removeBtnHandler}>
        <RemoveIcon />
      </Button>
      {count}
      <Button onClick={addBtnHandler}>
        <AddIcon />
      </Button>
    </EntryControlsStyled>
  );
}

EntryControls.propTypes = {
  id: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  count: PropTypes.number,
  price: PropTypes.number,
};
