import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('renders home as expected', () => {
    it('should find label and button element', () => {
        render(<Home />, { wrapper: MemoryRouter });
      expect(screen.getByRole('button')).toBeDefined();
      const label = screen.getByLabelText('Search')
      expect(label).toBeDefined();
    });
    it('should render 2 radio buttons', () => {
      render(<Home />, { wrapper: MemoryRouter });
      const results = screen.queryByTestId('peep-show-buttons');
    expect(results.childNodes).toHaveLength(2);
    })
  });


