import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from '@store/index';
import { productsMock, specialsMock } from 'src/tests/variables';
import SpecialsWrapper from './SpecialsWrapper';

jest.mock('@hooks/useMatchMedia');

describe('SpecialsWrapper component', () => {
  test('renders items and title', () => {
    const store = createStore({
      products: {
        items: productsMock,
        filter: 'all',
      },
      specials: {
        info: specialsMock,
        items: {
          '0tm7iWSKEY3971platI4': 12,
        },
      },
    });

    render(
      <Provider store={store}>
        <SpecialsWrapper />
      </Provider>
    );

    expect(screen.getByText(/Сырный день/)).toBeInTheDocument();
    expect(screen.getByText(/Пепперони/)).toBeInTheDocument();
  });

  test('hides on error', () => {
    const store = createStore({
      specials: {
        error: 'sth went wrong',
      },
    });

    render(
      <Provider store={store}>
        <SpecialsWrapper />
      </Provider>
    );

    expect(() => {
      screen.getByTestId('specials-cont');
    }).toThrow();
  });
});
