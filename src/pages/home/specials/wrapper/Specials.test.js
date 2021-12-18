import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import createStore from '@store/index';
import HomeLayout from '@pages/home/page/HomeLayout';
import { getDoc } from 'firebase/firestore';

jest.mock('@hooks/useMatchMedia');
jest.mock('@store/firestore');

describe('Specials component', () => {
  test('renders loading anim and item', async () => {
    render(
      <Provider store={createStore()}>
        <HomeLayout />
      </Provider>
    );

    const title = screen.getByText('Особые предложения');
    const lodingBadges = screen.getAllByTestId('loading-badge');

    expect(title).toBeInTheDocument();
    expect(lodingBadges).toHaveLength(5);

    await waitFor(() => {
      expect(title).toHaveTextContent(/^Сырный день!$/);
    });

    const items = screen.getAllByText('Пепперони');

    expect(items).toHaveLength(2);
  });

  test('hides on error', async () => {
    getDoc.mockImplementation(() => {
      throw new Error('Test error');
    });

    render(
      <Provider store={createStore()}>
        <HomeLayout />
      </Provider>
    );

    const title = screen.getByText('Особые предложения');

    await waitFor(() => expect(title).not.toBeInTheDocument());
  });
});
