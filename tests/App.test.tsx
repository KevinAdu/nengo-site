import React from 'react';
import { describe, beforeEach, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should render a Header, Footer and container', async () => {
    const title = await screen.findByText('Nengo');
    const description = await screen.findByText('Converts Gregorian years into traditional Japanese years');
    const inputLabel = await screen.findByText('Please enter a year');
    const input = await screen.findByRole('spinbutton');

    expect(title).toBeDefined();
    expect(description).toBeDefined();
    expect(inputLabel).toBeDefined();
    expect(input).toBeDefined();
  });
});
