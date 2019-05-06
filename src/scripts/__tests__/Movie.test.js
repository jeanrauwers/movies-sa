import React from 'react';
import { shallow } from 'enzyme';
import Movie from '../components/Movie';

describe('Testing Movie component', () => {
	const movieObj = {
		title: 'test',
		backdrop_path: 'test',
		release_date: new Date('12/10/1985')
	};
	const moviecomponent = shallow(<Movie movie={movieObj} />);
	test('should have text value of movieObjt.release_date', () => {
		expect(moviecomponent.find('p').text()).toEqual('(1985)');
	});
});
