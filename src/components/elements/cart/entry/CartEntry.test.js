import createStore from '@store/index';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import Cart from '..';

jest.mock('@store/firestore');

describe('CartEntry component', () => {
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

  test('renders correctly', () => {
    render(
      // <BrowserRouter>
      <Provider store={store}>
        <Cart />
      </Provider>
      // <BrowserRouter>
    );

    expect(screen.getByText('Пепперони')).toBeInTheDocument();
    expect(screen.getByText('Мясная')).toBeInTheDocument();

    expect(screen.getByText(/традиционное/)).toBeInTheDocument();
    expect(screen.getByText(/тонкое/)).toBeInTheDocument();

    expect(screen.getByText(/300/)).toBeInTheDocument();
    expect(screen.getByText(/250/)).toBeInTheDocument();
  });

  test('controls works', async () => {
    render(
      // <BrowserRouter>
      <Provider store={store}>
        <Cart />
      </Provider>
      // <BrowserRouter>
    );

    const addBtn = screen.getAllByRole('button', { name: 'Add item' })[0];
    const removeBtn = screen.getAllByRole('button', { name: 'Remove item' })[0];
    const count = screen.getAllByTestId('cart-items-count')[0];

    userEvent.click(addBtn);
    expect(count).toHaveTextContent(2);

    userEvent.click(removeBtn);
    userEvent.click(removeBtn);
    await waitFor(() => expect(count).not.toBeInTheDocument());
  });
});
