/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState, useEffect } from 'react';
import Header from './Header';

const api_key = '88a0f517b9c8cbdb65627750ba696fd8';
const trendingMoviesUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`;

export const fetchDataFromApi = (url, setMoviesArr, setLoading) => {
	fetch(url)
		.then(response => response.json())
		.then(jsonResponse => {
			setMoviesArr(jsonResponse.results);
			setLoading(false);
		});
};

export const App = () => {
	const [loading, setLoading] = useState(true);
	const [moviesArr, setMoviesArr] = useState([]);

	useEffect(() => {
		fetchDataFromApi(trendingMoviesUrl, setMoviesArr, setLoading);
	}, []);

	return (
		<>
			<Header text="Movies SA" user={'Jean Rauwers'} />
			<div className="search-title">Please search for your favorite movie!</div>
			<div className="movies-grid" />
			{moviesArr
				? moviesArr.map(movie => {
						// eslint-disable-next-line no-console
						console.log(movie);
				  })
				: ''}
		</>
	);
};
