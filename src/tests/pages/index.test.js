import { productsRef, specialsRef } from '@root/src/tests/variables';
const { createStore } = jest.requireActual('@store/index');

describe('Index page SSG', () => {
  let store;

  beforeEach(() => {
    store = createStore();

    jest.doMock('@store/index', () => ({
      getStaticProps: (func) => func(store),
    }));
  });

  afterEach(() => jest.resetModules());

  test('dispatches data', async () => {
    jest.doMock('firebase-admin', () => ({
      apps: {
        length: 0,
      },
      credential: {
        cert() {},
      },
      initializeApp() {},
      firestore() {
        return {
          collection(name) {
            return {
              get() {
                switch (name) {
                  case 'pizzas':
                    return { empty: false, ...productsRef };
                  case 'specials':
                    return { empty: false, ...specialsRef };
                }
              },
            };
          },
        };
      },
    }));

    const { getStaticProps } = require('@pages/index');

    await getStaticProps();

    expect(store.getState()).toEqual({
      products: {
        items: {
          '0tm7iWSKEY3971platI4': {
            style: {
              classic: {
                large: 810,
                normal: 610,
                small: 400,
              },
              thin: {
                normal: 490,
                large: 710,
              },
            },
            img: {
              thin: '/stub',
              classic: '/stub',
            },
            ingredients: [
              'Пикантная пепперони',
              'увеличенная порция моцареллы',
              'томатный соус',
            ],
            categories: ['spicy', 'cheese'],
            price: {
              large: 749,
              normal: 639,
              small: 485,
            },
            title: 'Пепперони',
            id: '0tm7iWSKEY3971platI4',
          },
        },
        error: null,
        filter: 'all',
      },
      specials: {
        info: {
          discounts: { category: 'pizzas', cheese: 12 },
          title: 'Сырный день!',
        },
        items: { '0tm7iWSKEY3971platI4': 12 },
        error: null,
      },
      cart: { items: [], count: 0, cost: 0 },
    });
  });

  test('dispatches error', async () => {
    jest.doMock('firebase-admin', () => ({
      apps: {
        length: 0,
      },
      credential: {
        cert() {},
      },
      initializeApp() {},
      firestore() {
        return {
          collection(name) {
            return {
              get() {
                switch (name) {
                  case 'pizzas':
                    return { empty: true, ...productsRef };
                  case 'specials':
                    return { empty: false, ...specialsRef };
                }
              },
            };
          },
        };
      },
    }));

    const { getStaticProps } = require('@pages/index');

    await getStaticProps();

    expect(store.getState()).toEqual({
      products: {
        items: {},
        error: { message: 'sth went wrong' },
        filter: 'all',
      },
      specials: {
        info: {},
        items: {},
        error: { message: 'sth went wrong' },
      },
      cart: { items: [], count: 0, cost: 0 },
    });
  });
});
