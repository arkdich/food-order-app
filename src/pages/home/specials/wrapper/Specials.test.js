import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import createStore from '@store/index';
import HomeLayout from '@pages/home/page/HomeLayout';
import { getDoc } from 'firebase/firestore';

jest.mock('@hooks/useMatchMedia');
jest.mock('@store/firestore');

describe('Specials component', () => {
  test('renders loading anim and item', async () => {
    const screen = render(
      <Provider store={createStore()}>
        <HomeLayout />
      </Provider>
    );

    const title = screen.queryByText('Особые предложения');
    const lodingBadges = screen.queryAllByTestId('loading-badge');

    expect(title).toBeInTheDocument();
    expect(lodingBadges).toHaveLength(5);

    await waitFor(() => {
      expect(title).toHaveTextContent('Сырный день');
      expect(title).not.toHaveTextContent('Особые предложения');
    });

    const items = screen.queryAllByText('Пепперони');

    expect(items).toHaveLength(2);
  });

  test('hides on error', async () => {
    getDoc.mockImplementation(() => {
      throw new Error('Test error');
    });

    const screen = render(
      <Provider store={createStore()}>
        <HomeLayout />
      </Provider>
    );

    await waitFor(() => {
      const title = screen.queryByText('Особые предложения');

      expect(title).not.toBeInTheDocument();
    });
  });
});
