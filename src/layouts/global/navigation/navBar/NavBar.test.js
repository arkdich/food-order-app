import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavBar from './NavBar';
import { Provider } from 'react-redux';
import { createStore } from '@store/index';
import { useRouter } from 'next/router';
import { RouterContext } from 'next/dist/shared/lib/router-context';

jest.mock('@hooks/useMatchMedia');

describe('NavBar component', () => {
  let store;

  beforeAll(() => {
    Element.prototype.scrollIntoView = () => {};
  });

  beforeEach(() => {
    store = createStore({
      products: {
        filter: 'all',
      },
    });

    const modal = document.createElement('div');
    modal.id = 'modal';
    document.body.append(modal);
  });

  afterEach(() => {
    document.getElementById('modal').remove();
  });

  test('redirects with no search', () => {
    useRouter.mockImplementation(() => ({
      asPath: '/',
      replace: jest.fn(),
    }));

    Object.defineProperty(window, 'location', {
      value: {
        search: '',
      },
      configurable: true,
      writable: true,
    });

    render(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );

    const { replace } = useRouter.mock.results.at(0).value;
    expect(replace).toHaveBeenCalledWith('/?filter=all', null, {
      shallow: true,
    });
  });

  test('no redirect with another search', () => {
    useRouter.mockImplementation(() => ({
      asPath: '/?id=0tm7iWSKEY3971platI4',
      replace: jest.fn(),
    }));

    Object.defineProperty(window, 'location', {
      value: {
        search: '?id=0tm7iWSKEY3971platI4',
      },
      configurable: true,
      writable: true,
    });

    render(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );

    const { replace } = useRouter.mock.results.at(0).value;
    expect(replace).toBeCalledTimes(0);
  });

  test('filter switching works', () => {
    useRouter.mockImplementation(() => ({
      asPath: '/?filter=meat',
      push: jest.fn(),
      prefetch: jest.fn(() => ({ catch: () => {} })),
    }));

    render(
      <RouterContext.Provider value={useRouter()}>
        <Provider store={store}>
          <NavBar />
        </Provider>
      </RouterContext.Provider>
    );

    expect(screen.getByText('Мясные')).toHaveClass('active');

    userEvent.click(screen.getByRole('link', { name: 'Сырные' }));

    const { push } = useRouter.mock.results.at(0).value;

    expect(push).toHaveBeenCalledWith('/?filter=cheese', '/?filter=cheese', {
      shallow: true,
      locale: undefined,
      scroll: undefined,
    });
  });
});
