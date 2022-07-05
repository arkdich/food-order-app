import { createStore } from '@store/index';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Cart from '.';

describe('Cart component', () => {
  let store;

  beforeEach(() => {
    store = createStore();

    const modal = document.createElement('div');
    modal.id = 'modal';
    document.body.append(modal);
  });

  afterEach(() => {
    document.getElementById('modal').remove();
  });

  test('renders summary', () => {
    store = createStore({
      cart: {
        items: [
          {
            id: '1',
            type: 'classic',
            size: 'small',
            title: 'Пепперони',
            price: 250,
            count: 1,
          },
          {
            id: '2',
            type: 'thin',
            size: 'normal',
            title: 'Мясная',
            price: 300,
            count: 2,
          },
        ],
        count: 3,
        cost: 850,
      },
    });

    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    expect(screen.getByText(/3 товара/)).toBeInTheDocument();
    expect(screen.getByText(/850/)).toBeInTheDocument();
  });

  test('renders empty cart', () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    expect(screen.getByText(/корзина пуста/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Заказать' })).toBeDisabled();
  });
});
