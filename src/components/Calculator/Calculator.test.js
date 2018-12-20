import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
var sinon = require('sinon');

import React, { Component } from 'react';
import Calculator from './Calculator';

configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  shallow(<Calculator />);
});
