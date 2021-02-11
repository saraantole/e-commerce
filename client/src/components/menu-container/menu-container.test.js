import React from 'react';
import { shallow } from 'enzyme';
import { MenuContainer } from './menu-container.component';

it('should render MenuContainer component', () => {
  expect(shallow(<MenuContainer menuSections={[]} />)).toMatchSnapshot();
});