import { createStore } from '@store/index';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import SpecialsItem from './SpecialsItem';

describe('SpecialsItem component', () => {
  test('renders price correctly', () => {
    const store = createStore({
      specials: {
        items: {
          '0tm7iWSKEY3971platI4': 12,
        },
      },
    });

    render(
      <Provider store={store}>
        <SpecialsItem id="0tm7iWSKEY3971platI4" price={450} />
      </Provider>
    );

    expect(screen.getByText(/от 396/)).toBeInTheDocument();
  });
});
