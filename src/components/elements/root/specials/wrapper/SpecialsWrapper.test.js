import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import createStore from '@store/index';
import HomeLayout from '@pages/index';
// import { getDoc } from 'firebase/firestore';
// import { BrowserRouter } from 'react-router-dom';

jest.mock('@hooks/useMatchMedia');
// jest.mock('@store/firestore');

beforeEach(() => {
  const modal = document.createElement('div');
  modal.id = 'modal';

  document.body.append(modal);
});

describe('Specials component', () => {
  test('renders loading anim and item', async () => {
    render(
      // <BrowserRouter>
      <Provider store={createStore()}>
        <HomeLayout />
      </Provider>
      // <BrowserRouter>
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
      // <BrowserRouter>
      <Provider store={createStore()}>
        <HomeLayout />
      </Provider>
      // <BrowserRouter>
    );

    const title = screen.getByText('Особые предложения');

    await waitFor(() => expect(title).not.toBeInTheDocument());
  });
});
