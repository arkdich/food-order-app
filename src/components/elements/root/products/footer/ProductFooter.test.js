import { createStore } from '@store/index';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProductFooter from './ProductFooter';

describe('ProductFooter component', () => {
  let store;

  beforeEach(() => {
    store = createStore();
  });

  test('renders initial price', () => {
    render(
      <Provider store={store}>
        <ProductFooter id="0tm7iWSKEY3971platI4" price={485} />
      </Provider>
    );

    expect(screen.getByText(/от 485/)).toBeInTheDocument();
  });

  test('renders discount', () => {
    store = createStore({
      specials: {
        items: {
          '0tm7iWSKEY3971platI4': 12,
        },
      },
    });

    render(
      <Provider store={store}>
        <ProductFooter id="0tm7iWSKEY3971platI4" price={485} />
      </Provider>
    );

    expect(screen.getByText(/от 427/)).toBeInTheDocument();
  });

  test('renders mobile markdown', () => {
    render(
      <Provider store={store}>
        <ProductFooter id="0tm7iWSKEY3971platI4" price={485} isTablet={true} />
      </Provider>
    );

    expect(screen.getByRole('button', { name: /от 485/ })).toBeInTheDocument();
  });
});
