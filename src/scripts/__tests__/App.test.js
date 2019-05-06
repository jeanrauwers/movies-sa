import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../components/App';

describe('Testing App component', () => {
	test('should have class search-title', () => {
		expect(
			shallow(<App />)
				.find('div.search-title')
				.exists()
		).toBe(true);
	});
});
