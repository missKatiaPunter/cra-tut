import React from 'react';
import Title from './Title';
import { getByRole, render } from '@testing-library/react';

describe('renders title as expected', () => {
  it('should find div element', () => {
    const FIXTURE_PROPS = { title: 'Hello', subtitle: 'world' };
    const { getByText, getAllByRole } = render(<Title {...FIXTURE_PROPS} />);
    expect(getByText(/hello/i)).toBeDefined();
    expect(getByText(/world/)).toBeDefined();
  });
});