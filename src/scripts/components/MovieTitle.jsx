import React from 'react';

const MovieTitle = ({ movie }) => {
	const movieTitle = movie.title === undefined ? 'No title' : movie.title;
	const hasOriginalTitle =
		movie.original_name === undefined
			? 'No original name'
			: movie.original_name;

	return (
		<>
			<div className="movie-title">
				{hasOriginalTitle === 'No original name'
					? movieTitle
					: hasOriginalTitle}
			</div>
		</>
	);
};

export default MovieTitle;
