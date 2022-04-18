import createStore from '@store/';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Cart from '.';

jest.mock('@store/firestore');

describe('Cart component', () => {
  let store;

  beforeEach(() => {
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

    const modal = document.createElement('div');
    modal.id = 'modal';

    document.body.append(modal);
  });

  test('renders empty cart', () => {
    store = createStore();

    render(
      <BrowserRouter>
        <Provider store={store}>
          <Cart />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByText(/корзина пуста/)).toBeInTheDocument();
  });

  test('renders summary', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Cart />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByText(/3 товара/)).toBeInTheDocument();
    expect(screen.getByText(/850/)).toBeInTheDocument();
  });

  test('order btn disabled if empty', async () => {
    store = createStore();

    render(
      <BrowserRouter>
        <Provider store={store}>
          <Cart />
        </Provider>
      </BrowserRouter>
    );

    expect(
      screen.getByRole('button', { name: new RegExp('Заказать') })
    ).toBeDisabled();
  });
});
