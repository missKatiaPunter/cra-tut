import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders the router links', () => {
  render(<App />, { wrapper: MemoryRouter });
  expect(screen.getByText(/Starred/i)).toBeInTheDocument();
});

