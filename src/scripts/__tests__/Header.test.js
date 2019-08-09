import React from 'react';
import Header from '../components/Header';
import { shallow, mount, render } from 'enzyme';

describe('Testing Header component', () => {
	const header = shallow(<Header title={'test'} />);
	test('should have h2 tag', () => {
		expect(header.find('h1').exists()).toBe(true);
	});
	test('Header must have h2 value of test', () => {
		expect(header.find('h1').text()).toBe('test');
	});
});
