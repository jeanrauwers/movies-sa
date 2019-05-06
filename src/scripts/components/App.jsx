import React, { useState, useEffect } from 'react';
import Header from './Header';
import Movie from './Movie';
import Search from './Search';
import ModalComponent from './Modal';
import API_CONFIGS from '../configs';
import { Spinner } from 'reactstrap';

const dataFetcherHandler = (url, setMoviesArr, setLoading, setErrorMessage) => {
	fetch(url)
		.then(response => response.json())
		.then(jsonResponse => {
			setMoviesArr(jsonResponse.results);
			setLoading(false);
		})
		.catch(err => {
			setErrorMessage(err);
		});
};

const App = () => {
	const [loading, setLoading] = useState(true);
	const [moviesArr, setMoviesArr] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalMovie, setModalMovie] = useState();

	const trendingMoviesUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${
		API_CONFIGS.API_KEY
	}`;

	useEffect(() => {
		dataFetcherHandler(
			trendingMoviesUrl,
			setMoviesArr,
			setLoading,
			setErrorMessage
		);
	}, []);
	const search = searchValue => {
		const searchMoviesUrl = `https://api.themoviedb.org/3/search/movie?api_key=${
			API_CONFIGS.API_KEY
		}&query=${searchValue}`;
		setLoading(true);
		dataFetcherHandler(
			searchMoviesUrl,
			setMoviesArr,
			setLoading,
			setErrorMessage
		);
	};

	return (
		<>
			<Header title="Movies SA" user={'Jean Rauwers'} />
			<Search search={search} />
			<div className="search-title">Please search for your favorite movie!</div>
			<div className="movies-grid">
				{loading && !errorMessage ? (
					<div className="load-spinner">
						{' '}
						Loading .... <Spinner color="primary" />
					</div>
				) : errorMessage ? (
					<div className="load-spinner errorMessage">{errorMessage}</div>
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
