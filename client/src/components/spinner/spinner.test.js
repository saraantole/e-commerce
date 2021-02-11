import React from 'react';
import { shallow } from 'enzyme';

import Loading from './loading.component';
import Spinner from './spinner.component';

describe('Spinner HOC', () => {
  const TestComponent = () => <div className='test' />;
  const WrappedComponent = Spinner(TestComponent);

  describe('if loading is true', () => {
    it('should render Loading component', () => {
      const wrapper = shallow(<WrappedComponent isLoading={true} />);

      expect(wrapper.exists(Loading)).toBe(true);
    });

    it('should not render component', () => {
      const wrapper = shallow(<WrappedComponent isLoading={true} />);

      expect(wrapper.exists(TestComponent)).toBe(false);
    });
  });

  describe('if loading is false', () => {
    it('should render component', () => {
      const wrapper = shallow(<WrappedComponent isLoading={false} />);

      expect(wrapper.exists(TestComponent)).toBe(true);
    });

    it('should not render Loading', () => {
      const wrapper = shallow(<WrappedComponent isLoading={false} />);

      expect(wrapper.exists(Loading)).toBe(false);
    });
  });
});