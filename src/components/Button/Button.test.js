import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
var sinon = require('sinon');

import React, { Component } from 'react';
import Button from './Button';

configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  shallow(<Button />);
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Button actionEvent={() => {}}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('plusOne callback fires when button is clicked', () => {
  var plusCallback = sinon.spy();
  const myButton = shallow(<Button actionEvent={ plusCallback }/>);
  myButton.find(".actionButton").simulate('click');
  sinon.assert.called(plusCallback);
})
describe('Functionality', () => {
    var total = 0;
    var sumToDo = (act) => {
      total =act;
    }
    it('adds one to state when plused', () => {

      const myButton = shallow(<Button plusEvent={  sumToDo(+1) }/>);
      myButton.find('.actionButton').simulate('click');
      expect(total).toBe(1);
    })

    it('adds one to state when minused', () => {
      const myButton = shallow(<Button plusEvent={ sumToDo(-1) }/>);
      myButton.find('.actionButton').simulate('click');
      expect(total).toBe(-1);
    })

})
