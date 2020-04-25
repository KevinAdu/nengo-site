/* eslint-disable react/jsx-key */
import React from 'react';
import { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import DateField from './DateField';

describe('DateField', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DateField />);
  });

  it('should render the container, header and input', () => {
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('should start with an enter the year placeholder', () => {
    expect(wrapper.find('h2').text()).toEqual('Please enter a year');
  });

  describe('on input change', () => {
    it('should change state value to unsupported message when year is not in range', () => {
      const { onChange } = wrapper.find('input').props();

      act(() => {
        onChange({ target: { value: '1' } });
        wrapper.update();
      });

      expect(wrapper.find('h2').text()).toEqual('The year you have entered is not yet supported.');
    });

    it('should change state value to correct japanese calendar year', () => {
      const { onChange } = wrapper.find('input').props();

      act(() => {
        onChange({ target: { value: '1989' } });
        wrapper.update();
      });

      expect(wrapper.find('h2').text()).toEqual('Heisei (平成) Year 1');
    });
  });

  it('should change state value to enter valid year message when a number is not entered', () => {
    const { onChange } = wrapper.find('input').props();

    act(() => {
      onChange({ target: { value: 'aaa' } });
      wrapper.update();
    });

    expect(wrapper.find('h2').text()).toEqual('Please enter a valid year');
  });
});
