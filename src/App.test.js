import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders a non-empty component without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});

// For TDD (Test Driven Development) we'd want to write our test cases first before code.

test('renders increment button', () => {

});

test('shows the counter display', () => {

});

test('counter display starts at 0', () => {

});

test('clicking button increments counter display', () => {

});