import createStore from '@store/index';
// import { fetchProducts } from '@store/slices/products/productsSlice';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import CartButton from './CartButton';

jest.mock('@store/firestore');

describe('CartButton component', () => {
  test('renders empty cart', async () => {
    // const store = createStore();
    // await store.dispatch(fetchProducts());
    // render(
    //   // <BrowserRouter>
    //   <Provider store={store}>
    //     <CartButton />
    //   </Provider>
    //   // <BrowserRouter>
    // );
    // const cost = screen.getByText(/корзина/i);
    // const count = screen.getByText(/0/);
    // expect(cost).toBeInTheDocument();
    // expect(count).toBeInTheDocument();
  });

  test('renders total cost and count', async () => {
    const store = createStore({
      cart: {
        items: [],
        count: 3,
        cost: 1880,
      },
    });

    // await store.dispatch(fetchProducts());

    render(
      // <BrowserRouter>
      <Provider store={store}>
        <CartButton />
      </Provider>
      // <BrowserRouter>
    );

    // const cost = screen.getByText(/1880/);
    // const count = screen.getByText('3');

    // expect(cost).toBeInTheDocument();
    // expect(count).toBeInTheDocument();
  });
});
