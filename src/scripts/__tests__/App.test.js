import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

describe('Testing App component', () => {
	const appComponent = shallow(<App />);
	test('should have class search-title', () => {
		expect(appComponent.find('div.search-title').exists()).toBe(true);
	});

	test('should have class movies-grid', () => {
		expect(appComponent.find('div.movies-grid').exists()).toBe(true);
	});
});
