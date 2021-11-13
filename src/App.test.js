import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<App />);

const findByTestAttribute = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders a non-empty component without crashing', () => {
  const wrapper = setup();
  const appComponent = findByTestAttribute(wrapper, "component-app");

  expect(appComponent.length).toBe(1);
});

// For TDD (Test Driven Development) we'd want to write our test cases first before code.
// We'd want to make them red, and then green.

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttribute(wrapper, "increment-button");

  expect(button.length).toBe(1);
});

test('shows the counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttribute(wrapper, "counter-display");

  expect(counterDisplay.length).toBe(1);
});

test('counter display starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttribute(wrapper, "count").text(); // always checks against a string.

  expect(count).toBe("0");
});

test('clicking button increments counter display', () => {
  const wrapper = setup();
  // find the button
  const button = findByTestAttribute(wrapper, "increment-button");

  // click the button
  button.simulate('click');

  // find the display, and test that the number has been incremented
  const count = findByTestAttribute(wrapper, "count").text(); // always checks against a string.
  expect(count).toBe("1");
  
});
