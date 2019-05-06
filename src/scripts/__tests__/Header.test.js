import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

describe('Testing Header component', () => {
	const header = shallow(<Header title={'test'} />);
	test('should have h2 tag', () => {
		expect(header.find('h2').exists()).toBe(true);
	});
	test('Header must have h2 value of test', () => {
		expect(header.find('h2').text()).toBe('test');
	});
});
