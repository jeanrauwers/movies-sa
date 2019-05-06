import React from 'react';
import { shallow } from 'enzyme';
import MovieImage from '../components/MovieImage';

describe('Testing MovieImage component', () => {
	const movieObj = {
		title: 'test',
		backdrop_path: 'test'
	};
	const movieImage = shallow(<MovieImage movie={movieObj} />);
	test('should have alt tag to be iquals to The movie title: ${movieObj.title}', () => {
		expect(movieImage.find('img').prop('alt')).toEqual(
			`The movie title: ${movieObj.title}`
		);
	});
	test('Header must have src value of https://image.tmdb.org/t/p/w500${movieObj.backdrop_path}', () => {
		expect(movieImage.find('img').prop('src')).toEqual(
			`https://image.tmdb.org/t/p/w500${movieObj.backdrop_path}`
		);
	});
});
