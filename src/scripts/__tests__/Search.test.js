import Search from '../components/Search';
import React from 'react';
import { shallow } from 'enzyme';

describe('Testing Modal component', () => {
	const movieObj = {
		title: 'test',
		vote_average: 4,
		overview: 'movie overview',
		backdrop_path: 'test'
	};
	const searchComponent = shallow(<Search movie={movieObj} />);
	test('Search component can be render', () => {
		expect(searchComponent.find('.search-form').length).toBe(1);
	});
});
