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
  });


