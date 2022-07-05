import { createStore } from '@store/index';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProductPage from '.';
import userEvent from '@testing-library/user-event';
import CartButton from '@layouts/global/navigation/cart/CartButton';
import { useRouter } from 'next/router';
import { productsMock, specialsMock } from 'src/tests/variables';

describe('ProductPage component', () => {
  let store;

  beforeEach(() => {
    store = createStore({
      products: {
        items: productsMock,
        filter: 'all',
      },
      specials: {
        items: specialsMock,
      },
    });

    const modal = document.createElement('div');
    modal.id = 'modal';
    document.body.append(modal);

    useRouter.mockImplementation(() => ({
      asPath: '/?id=0tm7iWSKEY3971platI4',
    }));
  });

  afterEach(() => {
    document.getElementById('modal').remove();
  });

  test('renders product correctly', () => {
    render(
      <Provider store={store}>
        <ProductPage />
      </Provider>
    );

    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent(
      '30 см, традиционное, 610 г'
    );

    userEvent.click(screen.getByRole('button', { name: /Тонкое/ }));

    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent(
      '30 см, тонкое, 490 г'
    );
  });

  test("wrong combinations aren't allowed", () => {
    render(
      <Provider store={store}>
        <ProductPage />
      </Provider>
    );

    const btnThin = screen.getByRole('button', { name: /Тонкое/ });
    const btnClassic = screen.getByRole('button', { name: /Классическое/ });
    const btnSmall = screen.getByRole('button', { name: /Маленькая/ });

    userEvent.click(btnThin);

    expect(btnSmall).toBeDisabled();

    userEvent.click(btnClassic);
    userEvent.click(btnSmall);

    expect(btnThin).toBeDisabled();
  });

  test('adds product to cart', () => {
    render(
      <Provider store={store}>
        <CartButton />
        <ProductPage />
      </Provider>
    );

    const addBtn = screen.getByRole('button', { name: /Добавить/ });

    userEvent.click(addBtn);
    userEvent.click(screen.getByRole('button', { name: /Большая/ }));
    userEvent.click(addBtn);

    expect(screen.getByTestId('cart-item-count')).toHaveTextContent('2');
  });
});
