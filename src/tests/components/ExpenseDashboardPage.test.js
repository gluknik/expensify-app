import React from 'react';
import { shallow } from 'enzyme';
import ExpanseDashboardPage from '../../components/ExpanseDashboardPage';

test('should render ExpanseDashboardPage correctly', () => {
  const wrapper = shallow(<ExpanseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});