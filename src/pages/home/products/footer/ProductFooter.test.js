import { configureStore } from '@reduxjs/toolkit';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProductFooter from './ProductFooter';
import useMatchMedia from '@hooks/useMatchMedia';
import { BrowserRouter } from 'react-router-dom';

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
      <BrowserRouter>
        <Provider store={store}>
          <ProductFooter id="0tm7iWSKEY3971platI4" price={485} />
        </Provider>
      </BrowserRouter>
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
      <BrowserRouter>
        <Provider store={store}>
          <ProductFooter id="0tm7iWSKEY3971platI4" price={485} />
        </Provider>
      </BrowserRouter>
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
      <BrowserRouter>
        <Provider store={store}>
          <ProductFooter id="0tm7iWSKEY3971platI4" price={485} />
        </Provider>
      </BrowserRouter>
    );

    const desktopBtn = screen.getByText(/выбрать/i);

    expect(desktopBtn).toBeInTheDocument();

    useMatchMedia.mockImplementation(() => ({
      matches: true,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    cleanup();

    render(
      <BrowserRouter>
        <Provider store={store}>
          <ProductFooter id="0tm7iWSKEY3971pla" price={85} />
        </Provider>
      </BrowserRouter>
    );

    expect(desktopBtn).not.toBeInTheDocument();
  });
});
