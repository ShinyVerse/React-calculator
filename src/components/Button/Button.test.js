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
  const myButton = shallow(<Button actionEvent={ plusCallback }/>);
  // console.log(myButton.debug())
  myButton.find(".actionButton").simulate('click');
  sinon.assert.called(plusCallback);
})
describe('Functionality', () => {
    var count = 0;
    var sumToDo = (act) => {
      count =act;
    }
    it('adds one to state when plused', () => {

      const myButton = shallow(<Button plusEvent={  sumToDo(+1) }/>);
      myButton.find('.actionButton').simulate('click');
      expect(count).toBe(1);
    })

    it('adds one to state when minused', () => {
      const myButton = shallow(<Button plusEvent={ sumToDo(-1) }/>);
      myButton.find('.actionButton').simulate('click');
      expect(count).toBe(-1);
    })


})
