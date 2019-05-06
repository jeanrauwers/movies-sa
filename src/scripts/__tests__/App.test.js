import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App';

describe('Can I render App component?', () => {
	test('should render without throwing an error', () => {
		expect(
			shallow(<App />)
				.find('h1')
				.exists()
		).toBe(true);
	});
});
