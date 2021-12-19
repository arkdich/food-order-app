import createStore from '@store/index';
import { fetchProducts } from './productsSlice';
import { getDocs } from '@firebase/firestore';

jest.mock('@store/firestore');

describe('productsSlice', () => {
  let store;

  beforeEach(() => {
    store = createStore();
  });

  describe('thunk', () => {
    test('fetches products', async () => {
      await store.dispatch(fetchProducts());

      const state = store.getState();

      expect(state.products.status).toEqual('success');
      expect(state.products.items).toEqual({
        pizzas: [
          {
            categories: ['spicy', 'cheese'],
            id: '0tm7iWSKEY3971platI4',
            img: { classic: '', thin: '' },
            ingredients: [
              'Пикантная пепперони',
              'увеличенная порция моцареллы',
              'томатный соус',
            ],
            price: { large: 749, normal: 639, small: 485 },
            style: {
              classic: { large: 810, normal: 610, small: 400 },
              thin: { large: 710, normal: 490 },
            },
            title: 'Пепперони',
          },
        ],
      });
    });

    test("doesn't crash on error", async () => {
      getDocs.mockImplementationOnce(() => {
        throw new Error('Test error');
      });

      await store.dispatch(fetchProducts());

      const state = store.getState();

      expect(state.products.status).toEqual('error');
      expect(state.products.error).toEqual('Test error');
    });
  });
});
