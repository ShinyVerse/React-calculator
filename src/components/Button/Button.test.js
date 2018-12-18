import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
var sinon = require('sinon');

import React, { Component } from 'react';
import Button from './Button';

configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  shallow(<Button />);
});

it('plusOne callback fires when button is clicked', () => {
  var plusCallback = sinon.spy();
  const myButton = shallow(<Button plusEvent={ plusCallback }/>);
  // console.log(myButton.debug())
  myButton.find(".myPlusButton").simulate('click');
  sinon.assert.called(plusCallback);
})

it('adds one to state when clicked', () => {
  var count = 0;
  var plus = () => {
    count =+ 1;
  }
  const myButton = shallow(<Button plusEvent={ plus }/>);
  myButton.find('.myPlusButton').simulate('click');
  expect(count).toBe(1);
})
