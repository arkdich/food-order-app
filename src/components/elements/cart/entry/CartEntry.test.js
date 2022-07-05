import { createStore } from '@store/index';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Cart from '..';

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

  afterEach(() => {
    document.getElementById('modal').remove();
  });

  test('renders correctly', () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    expect(screen.getByText('Пепперони')).toBeInTheDocument();
    expect(screen.getByText('Мясная')).toBeInTheDocument();

    expect(screen.getByText(/традиционное/)).toBeInTheDocument();
    expect(screen.getByText(/тонкое/)).toBeInTheDocument();

    expect(screen.getByText(/300/)).toBeInTheDocument();
    expect(screen.getByText(/250/)).toBeInTheDocument();
  });
});
