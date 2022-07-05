import Cart from '..';
import { createStore } from '@store/index';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

describe('EntryControls component', () => {
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
        ],
        count: 1,
        cost: 250,
      },
    });

    const modal = document.createElement('div');
    modal.id = 'modal';
    document.body.append(modal);
  });

  afterEach(() => {
    document.getElementById('modal').remove();
  });

  test('controls works', async () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    const addBtn = screen.getByRole('button', { name: 'Add item' });
    const removeBtn = screen.getByRole('button', {
      name: 'Remove item',
    });
    const count = screen.getByTestId('cart-items-count');

    userEvent.click(addBtn);

    expect(count).toHaveTextContent(2);

    userEvent.click(removeBtn);
    userEvent.click(removeBtn);

    await waitFor(() => expect(count).not.toBeInTheDocument());
  });
});
