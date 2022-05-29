import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SwitchComponent from './SwitchComponent';

describe('SwitchComponent', () => {
  test('appropriately renders buttons', () => {
    const labels = [
      {
        label: 'Test 1',
      },
      {
        label: 'Test 2',
        disabled: true,
      },
    ];

    render(<SwitchComponent labels={labels} loaded />);

    expect(screen.getAllByRole('button')).toHaveLength(2);

    expect(screen.getByRole('button', { name: 'Test 1' })).toBeEnabled();
    expect(screen.getByRole('button', { name: 'Test 2' })).toBeDisabled();
  });

  test('clickHandler works correctly', () => {
    const labels = [
      {
        label: 'Test 1',
      },
      {
        label: 'Test 2',
      },
    ];

    const changeState = (title) => {
      const label = labels.find((label) => label.label === title);

      label.disabled = true;
    };

    render(
      <SwitchComponent labels={labels} loaded clickHandler={changeState} />
    );

    userEvent.click(screen.getByRole('button', { name: 'Test 2' }));

    expect(labels[1].disabled).toEqual(true);
  });

  test('animation on click works', () => {
    const labels = [
      {
        label: 'Test 1',
      },
      {
        label: 'Test 2',
      },
      {
        label: 'Test 3',
      },
    ];

    render(<SwitchComponent labels={labels} loaded />);

    const switchBlock = screen.getByTestId('switch-block');

    const btn1 = screen.getByRole('button', { name: 'Test 1' });
    const btn3 = screen.getByRole('button', { name: 'Test 3' });

    expect(switchBlock).toHaveStyle('transform: translateX(calc(0% + 4px))');

    userEvent.click(btn3);

    expect(switchBlock).toHaveStyle('transform: translateX(calc(200% + 8px))');

    userEvent.click(btn1);

    expect(switchBlock).toHaveStyle('transform: translateX(calc(0% + 4px))');
  });
});
