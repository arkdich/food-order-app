import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProductsWrapper from './ProductsWrapper';
import { createStore } from '@store/index';
import { productsMock } from 'src/tests/variables';

jest.mock('@hooks/useMatchMedia');

describe('ProductWrapper component', () => {
  test('renders filter', () => {
    let store = createStore({
      products: {
        items: productsMock,
        filter: 'cheese',
      },
    });

    render(
      <Provider store={store}>
        <ProductsWrapper />
      </Provider>
    );

    expect(screen.getByText(/Сырные/)).toBeInTheDocument();

    cleanup();

    store = createStore({
      products: {
        items: productsMock,
        filter: 'veg',
      },
    });

    render(
      <Provider store={store}>
        <ProductsWrapper />
      </Provider>
    );

    expect(screen.getByText(/Овощные/)).toBeInTheDocument();
  });

  test('renders items', () => {
    const store = createStore({
      products: {
        items: productsMock,
        filter: 'all',
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <ProductsWrapper />
      </Provider>
    );

    expect(screen.getByText(/Пепперони/)).toBeInTheDocument();
    expect(screen.getByText(/Мясная/)).toBeInTheDocument();
  });

  test('renders error', () => {
    const store = createStore({
      products: {
        error: 'sth went wrong',
      },
    });

    render(
      <Provider store={store}>
        <ProductsWrapper />
      </Provider>
    );

    expect(screen.getByText(/пошло не так/)).toBeInTheDocument();
  });
});
