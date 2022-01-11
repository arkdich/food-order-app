import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { getDocs } from '@firebase/firestore';
import ProductsWrapper from './ProductsWrapper';
import createStore from '@store/index';
import { BrowserRouter } from 'react-router-dom';

jest.mock('@hooks/useMatchMedia');
jest.mock('@store/firestore');

describe('ProductWrapper component', () => {
  test('renders loading spinner and item', async () => {
    render(
      <BrowserRouter>
        <Provider store={createStore()}>
          <ProductsWrapper />
        </Provider>
      </BrowserRouter>
    );

    const spinner = screen.getByText(/spinner/);

    expect(spinner).toBeInTheDocument();

    const title = await screen.findByText('Пепперони');

    expect(title).toBeInTheDocument();
    expect(spinner).not.toBeInTheDocument();
  });

  test('renders error', async () => {
    getDocs.mockImplementationOnce(() => {
      throw new Error('Test error');
    });

    render(
      <Provider store={createStore()}>
        <ProductsWrapper />
      </Provider>
    );

    const error = await screen.findByText(/пошло не так/);

    expect(error).toBeInTheDocument();
  });
});
