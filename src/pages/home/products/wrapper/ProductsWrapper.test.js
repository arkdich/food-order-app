import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { getDocs } from '@firebase/firestore';
import ProductsWrapper from './ProductsWrapper';
import createStore from '@store/index';

jest.mock('@hooks/useMatchMedia');
jest.mock('@store/firestore');

describe('ProductWrapper component', () => {
  test('renders loading spinner and item', async () => {
    render(
      <Provider store={createStore()}>
        <ProductsWrapper />
      </Provider>
    );

    const spinner = screen.queryByText(/spinner/);

    expect(spinner).toBeInTheDocument();

    await waitFor(() => {
      const title = screen.queryByText('Пепперони');

      expect(title).toBeInTheDocument();
    });

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

    await waitFor(() => {
      const error = screen.queryByText(/пошло не так/);

      expect(error).toBeInTheDocument();
    });
  });
});
