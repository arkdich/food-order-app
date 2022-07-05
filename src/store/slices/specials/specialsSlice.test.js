import { createStore } from '@store/index';
import { productsMock, specialsMock } from 'src/tests/variables';
import { specialsActions } from './specialsSlice';

describe('specialsSlice', () => {
  let store;

  beforeEach(() => {
    store = createStore();
  });

  describe('reducer', () => {
    test('sets items', () => {
      store.dispatch(
        specialsActions.setItems({
          specials: specialsMock,
          products: productsMock,
        })
      );

      expect(store.getState().specials.items).toEqual({
        '0tm7iWSKEY3971platI4': 12,
      });
    });
  });
});
