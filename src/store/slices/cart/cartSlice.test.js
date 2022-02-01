import createStore from '@store/';
import { cartActions } from './cartSlice';

jest.mock('@store/firestore');

describe('cartSlice', () => {
  let store;

  beforeEach(() => {
    store = createStore();
  });

  describe('reducers', () => {
    test('addItem works', () => {
      const item1 = {
        id: '1',
        type: 'classic',
        size: 'small',
      };

      const item2 = {
        id: '2',
        type: 'classic',
        size: 'normal',
      };

      const item3 = {
        id: '3',
        type: 'thin',
        size: 'large',
      };

      store.dispatch(cartActions.addItem(item1));
      store.dispatch(cartActions.addItem(item1));
      store.dispatch(cartActions.addItem(item2));
      store.dispatch(cartActions.addItem(item3));
      store.dispatch(cartActions.addItem(item3));

      expect(store.getState().cart.items).toEqual([
        { id: '1', type: 'classic', size: 'small', count: 2 },
        { id: '2', type: 'classic', size: 'normal', count: 1 },
        { id: '3', type: 'thin', size: 'large', count: 2 },
      ]);
    });
  });
});
