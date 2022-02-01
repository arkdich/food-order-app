import createStore from '@store/';
import { getDoc } from '@firebase/firestore';
import { fetchSpecials, specialsActions } from './specialsSlice';
import { fetchProducts } from '../products/productsSlice';

jest.mock('@store/firestore');

describe('specialsSlice', () => {
  let store;

  beforeEach(() => {
    store = createStore();
  });

  describe('thunk', () => {
    test('fetches items', async () => {
      await store.dispatch(fetchSpecials());

      const state = store.getState();

      expect(state.specials.status).toEqual('success');
      expect(state.specials.info).toEqual({
        discounts: { category: 'pizzas', cheese: 12 },
        title: 'Сырный день!',
      });
    });

    test("doesn't crash on error", async () => {
      getDoc.mockImplementationOnce(() => {
        throw new Error('Test error');
      });

      await store.dispatch(fetchSpecials());

      const state = store.getState();

      expect(state.specials.status).toEqual('error');
      expect(state.specials.error).toEqual('Test error');
    });
  });

  describe('reducer', () => {
    test('sets items', async () => {
      await Promise.all([
        store.dispatch(fetchSpecials()),
        store.dispatch(fetchProducts()),
      ]);

      await store.dispatch(
        specialsActions.setSpecialsItems(store.getState().products.items)
      );

      expect(store.getState().specials.items).toEqual({
        '0tm7iWSKEY3971platI4': 12,
      });
    });
  });
});
