import { render, screen } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import NavBar from './NavBar';
import { Provider } from 'react-redux';
import createStore from '@store/index';
import { createMemoryHistory } from 'history';
import ProductsWrapper from '@pages/index/products/wrapper/ProductsWrapper';
import App from '@root/src/App';

jest.mock('@store/firestore');
jest.mock('@hooks/useMatchMedia');

beforeEach(() => {
  const modal = document.createElement('div');
  modal.id = 'modal';

  document.body.append(modal);
});

describe('NavBar component', () => {
  beforeAll(() => {
    Element.prototype.scrollIntoView = () => {};
    console.warn = () => {};
  });

  test('appends default filter if none', () => {
    const history = createMemoryHistory({
      initialEntries: ['/'],
      initialIndex: 0,
    });

    render(
      <Router navigator={history} location={history.location}>
        <Provider store={createStore()}>
          <NavBar />
        </Provider>
      </Router>
    );

    expect(history.location.search).toEqual('?filter=all');
  });

  test('loads with existing filter', async () => {
    const history = createMemoryHistory({
      initialEntries: ['/?filter=cheese'],
      initialIndex: 0,
    });

    render(
      <Router navigator={history} location={history.location}>
        <Provider store={createStore()}>
          <NavBar />
          <ProductsWrapper />
        </Provider>
      </Router>
    );

    const cheese = await screen.findByText('Пепперони');
    const meat = screen.queryByText('Мясная');

    expect(cheese).toBeInTheDocument();
    expect(meat).not.toBeInTheDocument();
    expect(history.location.search).toEqual('?filter=cheese');
  });

  test('filter switching works', async () => {
    render(
      // <BrowserRouter>
      <Provider store={createStore()}>
        <App />
      </Provider>
      // <BrowserRouter>
    );

    const meatLink = screen.getByRole('link', { name: 'Мясные' });
    const cheeseLink = screen.getByRole('link', { name: 'Сырные' });

    const cheese = await screen.findByRole('heading', {
      level: 2,
      name: 'Пепперони',
    });
    const meat = screen.getByRole('heading', { level: 2, name: 'Мясная' });

    expect(cheese).toBeInTheDocument();
    expect(meat).toBeInTheDocument();

    userEvent.click(meatLink);

    expect(cheese).not.toBeInTheDocument();
    expect(meat).toBeInTheDocument();

    userEvent.click(cheeseLink);

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Пепперони',
      })
    ).toBeInTheDocument();
    expect(meat).not.toBeInTheDocument();
  });

  test('redirects on wrong link', async () => {
    const history = createMemoryHistory({
      initialEntries: ['/nonexistingstuff'],
      initialIndex: 0,
    });

    render(
      <Router navigator={history} location={history.location}>
        <Provider store={createStore()}>
          <App />
        </Provider>
      </Router>
    );

    expect(history.location.pathname).toEqual('/');
    expect(history.location.search).toEqual('?filter=all');
  });
});
