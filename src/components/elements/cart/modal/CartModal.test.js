import { createStore } from '@store/index';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import Cart from '..';

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

  afterEach(() => {
    document.getElementById('modal').remove();
  });

  test('cart gets empty', async () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    expect(screen.getByText('3 товара')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: 'Заказать' }));

    await waitFor(
      () => expect(screen.getByText('0 товаров')).toBeInTheDocument(),
      { timeout: 4000 }
    );
  });
});
