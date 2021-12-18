import { configureStore } from '@reduxjs/toolkit';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProductFooter from './ProductFooter';
import useMatchMedia from '@hooks/useMatchMedia';

jest.mock('@store/firestore');
jest.mock('@hooks/useMatchMedia');

describe('ProductFooter components', () => {
  test('renders discount', () => {
    const store = configureStore({
      reducer: {
        specials: () => ({
          items: {
            '0tm7iWSKEY3971platI4': 12,
          },
        }),
      },
    });

    render(
      <Provider store={store}>
        <ProductFooter id="0tm7iWSKEY3971platI4" price={485} />
      </Provider>
    );

    const price = screen.getByText(/от 427/);

    expect(price).toBeInTheDocument();
  });

  test('renders initial price', () => {
    const store = configureStore({
      reducer: {
        specials: () => ({
          items: {},
        }),
      },
    });

    render(
      <Provider store={store}>
        <ProductFooter id="0tm7iWSKEY3971platI4" price={485} />
      </Provider>
    );

    const price = screen.getByText(/от 485/);

    expect(price).toBeInTheDocument();
  });

  test('renders mobile markdown', () => {
    const store = configureStore({
      reducer: {
        specials: () => ({
          items: {},
        }),
      },
    });

    render(
      <Provider store={store}>
        <ProductFooter id="0tm7iWSKEY3971platI4" price={485} />
      </Provider>
    );

    const desktopBtn = screen.getByText(/добавить/i);

    expect(desktopBtn).toBeInTheDocument();

    useMatchMedia.mockImplementation(() => ({
      matches: true,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    cleanup();

    render(
      <Provider store={store}>
        <ProductFooter id="0tm7iWSKEY3971pla" price={85} />
      </Provider>
    );

    expect(desktopBtn).not.toBeInTheDocument();
  });
});
