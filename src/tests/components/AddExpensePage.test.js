import React from 'react';
import { shallow } from 'enzyme';
import { addExpensePage } from '../../components/AddExpansePage';

test('should render AddExpensePage correctly', () => {
  const onSubmit = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(<AddExpansePage onSubmit={onSubmit} history={history} />);
  expect(wrapper).toMatchSnapshot();
});