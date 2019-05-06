import React, { useState, useEffect } from 'react';
import Header from './Header';
import Movie from './Movie';
import Search from './Search';
import ModalComponent from './Modal';

const api_key = '88a0f517b9c8cbdb65627750ba696fd8';
const trendingMoviesUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`;

const App = () => {
	const [loading, setLoading] = useState(true);
	const [moviesArr, setMoviesArr] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalMovie, setModalMovie] = useState();

	useEffect(() => {
		fetch(trendingMoviesUrl)
			.then(response => response.json())
			.then(jsonResponse => {
				setMoviesArr(jsonResponse.results);
				setLoading(false);
			});
	}, []);
	const search = searchValue => {
		const searchMoviesUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchValue}`;
		setLoading(true);
		setErrorMessage(null);
		fetch(searchMoviesUrl)
			.then(response => response.json())
			.then(jsonResponse => {
				setMoviesArr(jsonResponse.results);
				setLoading(false);
			});
	};

	return (
		<>
			<Header title="Movies SA" user={'Jean Rauwers'} />
			<Search search={search} />
			<div className="search-title">Please search for your favorite movie!</div>
			<div className="movies-grid">
				{loading && !errorMessage ? (
					<span>loading...</span>
				) : errorMessage ? (
					<div className="errorMessage">{errorMessage}</div>
				) : (
					moviesArr.map((movie, index) => (
						<Movie
							key={`${index}-${movie.title}`}
							movie={movie}
							setModalMovie={setModalMovie}
							setModalIsOpen={setModalIsOpen}
							modal={modalIsOpen}
						/>
					))
				)}
			</div>

			<ModalComponent
				modal={modalIsOpen}
				setModalIsOpen={setModalIsOpen}
				movie={modalMovie}
			/>
		</>
	);
};
export default App;
