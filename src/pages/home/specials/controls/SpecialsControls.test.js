import { render, screen } from '@testing-library/react';
import SpecialsControls from './SpecialsControls';
import userEvent from '@testing-library/user-event';

describe('SpecialsControls component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = Object.defineProperty(
      document.createElement('div'),
      'clientWidth',
      {
        value: 800,
      }
    );
  });

  test('renders initial state', () => {
    render(<SpecialsControls container={wrapper} itemsCount={5} />);

    const btnLeft = screen.getByRole('button', {
      name: '',
      hidden: true,
    });

    expect(btnLeft).toHaveStyle('display: none');
  });

  test('left btn click works', () => {
    render(<SpecialsControls container={wrapper} itemsCount={5} />);

    const btnRight = screen.getByRole('button', {
      name: 'Next button',
    });

    userEvent.click(btnRight);

    const btnLeft = screen.getByRole('button', {
      name: 'Previous button',
    });

    expect(wrapper).toHaveStyle('transform: translateX(-220px)');
    expect(btnLeft).toHaveStyle('display: block');

    userEvent.click(btnLeft);

    expect(btnLeft).toHaveStyle('display: none');
  });

  test('right btn click works', () => {
    render(<SpecialsControls container={wrapper} itemsCount={5} />);

    const btnRight = screen.getByRole('button', {
      name: 'Next button',
    });

    userEvent.click(btnRight);
    userEvent.click(btnRight);

    const btnLeft = screen.getByRole('button', {
      name: 'Previous button',
    });

    expect(wrapper).toHaveStyle('transform: translateX(-440px)');
    expect(btnRight).toHaveStyle('display: none');

    userEvent.click(btnLeft);

    expect(btnRight).toHaveStyle('display: block');
  });

  test('btns hover works', () => {
    render(<SpecialsControls container={wrapper} itemsCount={5} />);

    const btnRight = screen.getByRole('button', {
      name: 'Next button',
    });

    userEvent.hover(btnRight);

    expect(wrapper).toHaveStyle('transform: translateX(-30px)');

    userEvent.click(btnRight);

    const btnLeft = screen.getByRole('button', {
      name: 'Previous button',
    });

    userEvent.hover(btnLeft);

    expect(wrapper).toHaveStyle('transform: translateX(-190px)');
  });
});
