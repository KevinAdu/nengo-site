import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';
import Header from './components/Header';

let wrapper: ShallowWrapper;
describe('App', () => {
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render a Header, Footer and container', () => {
    console.log(wrapper.debug());

    expect(wrapper.is('.container')).toBeTruthy();
    expect(
      wrapper.containsAllMatchingElements([<Header />, <footer />])
    ).toBeTruthy();
  });
});
