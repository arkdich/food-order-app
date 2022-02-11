import createStore from '@store/';
import { fetchProducts } from '@store/slices/products/productsSlice';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import ProductPage from './';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import CartButton from '@layouts/navigation/cart/CartButton';

jest.mock('@store/firestore');

describe('ProductPage component', () => {
  let store;

  beforeEach(async () => {
    store = createStore();
    await store.dispatch(fetchProducts());
  });

  test('renders product correctly', () => {
    const history = createMemoryHistory({
      initialEntries: ['/product?id=0tm7iWSKEY3971platI4'],
      initialIndex: 0,
    });

    render(
      <Router navigator={history} location={history.location}>
        <Provider store={store}>
          <ProductPage />
        </Provider>
      </Router>
    );

    expect(screen.getByRole('heading', { level: 4 }).innerHTML).toEqual(
      '30 см, традиционное, 610 г'
    );

    userEvent.click(screen.getByRole('button', { name: /Тонкое/ }));

    expect(screen.getByRole('heading', { level: 4 }).innerHTML).toEqual(
      '30 см, тонкое, 490 г'
    );
  });

  test("wrong combinations aren't allowed", () => {
    const history = createMemoryHistory({
      initialEntries: ['/product?id=0tm7iWSKEY3971platI4'],
      initialIndex: 0,
    });

    render(
      <Router navigator={history} location={history.location}>
        <Provider store={store}>
          <ProductPage />
        </Provider>
      </Router>
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

  test('overlay navigates back', async () => {
    const history = createMemoryHistory({
      initialEntries: ['/product?id=0tm7iWSKEY3971platI4'],
      initialIndex: 0,
    });

    render(
      <Router navigator={history} location={history.location}>
        <Provider store={store}>
          <ProductPage />
        </Provider>
      </Router>
    );

    userEvent.click(screen.getByTestId('product-overlay'));

    expect(history.location.pathname).toEqual('/');
    expect(history.location.search).toEqual('?filter=all');
  });

  test('adds product to cart', async () => {
    const history = createMemoryHistory({
      initialEntries: ['/product?id=0tm7iWSKEY3971platI4'],
      initialIndex: 0,
    });

    render(
      <Router navigator={history} location={history.location}>
        <Provider store={store}>
          <CartButton />
          <ProductPage />
        </Provider>
      </Router>
    );

    const btn = screen.getByRole('button', { name: /Добавить/ });

    userEvent.click(btn);

    userEvent.click(screen.getByRole('button', { name: /Большая/ }));

    userEvent.click(btn);

    expect(screen.getByTestId('cart-item-count').innerHTML).toEqual('2');
  });
});
