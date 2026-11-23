import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Shweta Dhanawade portfolio heading', () => {
  render(<App />);
  const headings = screen.getAllByText(/Shweta/i);
  expect(headings.length).toBeGreaterThan(0);
});
