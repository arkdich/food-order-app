import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { getDocs } from '@firebase/firestore';
import ProductsWrapper from './ProductsWrapper';
import createStore from '@store/index';

jest.mock('@firebase/firestore', () => ({
  getDocs: jest.fn(),
}));

jest.mock('@hooks/useMatchMedia');
jest.mock('@store/firestore');

describe('ProductWrapper component', () => {
  test('renders loading spinner and item', async () => {
    getDocs.mockImplementation(async (data) => data);

    const screen = render(
      <Provider store={createStore()}>
        <ProductsWrapper />
      </Provider>
    );

    const spinner = screen.getByText(/spinner/);

    expect(spinner).toBeInTheDocument();

    const title = await screen.findByText('Пепперони');

    expect(title).toBeInTheDocument();
    expect(spinner).not.toBeInTheDocument();
  });

  test('renders error', async () => {
    getDocs.mockImplementation(() => {
      throw new Error('yo');
    });

    const screen = render(
      <Provider store={createStore()}>
        <ProductsWrapper />
      </Provider>
    );

    const error = await screen.findByText(/пошло не так/);

    expect(error).toBeInTheDocument();
  });
});
