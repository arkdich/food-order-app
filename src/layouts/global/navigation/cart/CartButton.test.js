import { createStore } from '@store/index';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { productsMock, specialsMock } from 'src/tests/variables';
import CartButton from './CartButton';

describe('CartButton component', () => {
  let store;

  beforeEach(() => {
    store = createStore({
      products: {
        items: productsMock,
        filter: 'all',
      },
      specials: {
        info: specialsMock,
        items: {
          '0tm7iWSKEY3971platI4': 12,
        },
      },
    });
  });

  test('renders empty cart', () => {
    render(
      <Provider store={store}>
        <CartButton />
      </Provider>
    );

    const cost = screen.getByText(/корзина/i);
    const count = screen.getByText(/0/);

    expect(cost).toBeInTheDocument();
    expect(count).toBeInTheDocument();
  });

  test('renders total cost and count', () => {
    const store = createStore({
      cart: {
        items: [],
        count: 3,
        cost: 1880,
      },
    });

    render(
      <Provider store={store}>
        <CartButton />
      </Provider>
    );

    const cost = screen.getByText(/1880/);
    const count = screen.getByText('3');

    expect(cost).toBeInTheDocument();
    expect(count).toBeInTheDocument();
  });
});
