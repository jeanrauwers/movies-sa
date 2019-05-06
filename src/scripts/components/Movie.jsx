import React from 'react';
import MovieImage from './MovieImage';
import MovieTitle from './MovieTitle';

const noImageAvailablePlaceHolder =
	'https://bsa247.com/admin/default_images/no_image.png';
const Movie = ({ movie, modal, setModalIsOpen, setModalMovie }) => {
	const onClickHandler = () => {
		modal ? setModalIsOpen(false) : setModalIsOpen(true);
		setModalMovie(movie);
	};

	const movieReleaseDate =
		movie.release_date === undefined
			? new Date(movie.first_air_date).getFullYear().toString()
			: new Date(movie.release_date).getFullYear().toString();

	return (
		<>
			<div className="" onClick={onClickHandler}>
				<div>
					<MovieImage movie={movie} width="100%" />
				</div>
				<MovieTitle movie={movie} />
				<p>({isNaN(movieReleaseDate) ? 'No Date' : movieReleaseDate})</p>
			</div>
		</>
	);
};
export default Movie;
