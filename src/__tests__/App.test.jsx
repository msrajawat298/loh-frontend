import { test } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders the App component', () => {
  const { getByText, getByRole } = render(<App />);

  // Check if the component renders
  const heading = getByText('Vite + React');
  expect(heading).not.toBeNull();

  // Check if the initial count is 0
  const countText = getByText('count is 0');
  expect(countText).not.toBeNull();

  // Simulate a click event on the button to increment count
  const button = getByRole('button', { name: 'count is 0' });
  fireEvent.click(button);

  // Check if count is incremented
  const updatedCountText = getByText('count is 1');
  expect(updatedCountText).not.toBeNull();
});
