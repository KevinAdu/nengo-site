/* eslint-disable react/jsx-key */
import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import DateField from '../../src/components/DateField';

describe('DateField', async () => {
  const setup = () => {
    const utils = render(<DateField />);
    const input = screen.getByRole('spinbutton');

    return {
      input,
      ...utils,
    }
  }

  it('should render the input and text', async () => {
    render(<DateField />);
    const inputLabel = await screen.findByText('Please enter a year');
    const input = await screen.findByRole('spinbutton');
  
    expect(inputLabel).toBeDefined();
    expect(input).toBeDefined();
  });

  describe('on input change', () => {
    it('should change state value to unsupported message when year is not in range', async () => {
      const {input} = setup();
      fireEvent.change(input, {target: { value: '199' }});
      const inputLabel = await screen.findByText('The year you have entered is not yet supported.');
      expect(inputLabel).toBeDefined();
    });

    it('should change state value to correct japanese calendar year', async () => {
      const {input} = setup();
      fireEvent.change(input, {target: { value: '1990' }});
      const inputLabel = await screen.findByText('Heisei (平成) Year 2');
      expect(inputLabel).toBeDefined();
    });
  });
});
