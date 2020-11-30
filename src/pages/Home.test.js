import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('renders home as expected', () => {
    it('should find label and button element', () => {
      render(<Home />);
      expect(screen.getByRole('button')).toBeDefined();
    //   expect(getByText(/world/)).toBeDefined();
    });
  });


