import createStore from '@store/';
import { cartActions } from './cartSlice';

jest.mock('@store/firestore');

describe('cartSlice', () => {
  let store;

  beforeEach(() => {
    store = createStore({
      cart: {
        items: [
          { id: '1', type: 'classic', size: 'small', price: 200, count: 2 },
          { id: '2', type: 'classic', size: 'normal', price: 250, count: 1 },
        ],
        count: 3,
        cost: 650,
      },
    });
  });

  describe('reducers', () => {
    test('addItem works', () => {
      store = createStore();

      const item1 = {
        id: '1',
        type: 'classic',
        size: 'small',
        price: 200,
      };

      const item2 = {
        id: '2',
        type: 'classic',
        size: 'normal',
        price: 250,
      };

      store.dispatch(cartActions.addItem(item1));
      store.dispatch(cartActions.addItem(item1));
      store.dispatch(cartActions.addItem(item2));

      expect(store.getState().cart).toEqual({
        items: [
          { id: '1', type: 'classic', size: 'small', price: 200, count: 2 },
          { id: '2', type: 'classic', size: 'normal', price: 250, count: 1 },
        ],
        count: 3,
        cost: 650,
      });
    });

    test('removeItem works', () => {
      store.dispatch(
        cartActions.removeItem({ id: '1', type: 'classic', size: 'small' })
      );

      expect(store.getState().cart).toEqual({
        items: [
          { id: '1', type: 'classic', size: 'small', price: 200, count: 1 },
          { id: '2', type: 'classic', size: 'normal', price: 250, count: 1 },
        ],
        count: 2,
        cost: 450,
      });

      store.dispatch(
        cartActions.removeItem({ id: '2', type: 'classic', size: 'normal' })
      );

      expect(store.getState().cart).toEqual({
        items: [
          { id: '1', type: 'classic', size: 'small', price: 200, count: 1 },
        ],
        count: 1,
        cost: 200,
      });
    });
  });

  test('emptyCart works', () => {
    store.dispatch(cartActions.emptyCart());

    expect(store.getState().cart).toEqual({
      items: [],
      count: 0,
      cost: 0,
    });
  });
});
