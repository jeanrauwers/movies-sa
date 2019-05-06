import React from 'react';
const MovieImage = ({ movie, width }) => {
	const noImageAvailablePlaceHolder =
		'https://bsa247.com/admin/default_images/no_image.png';
	const moviePostImage =
		movie.backdrop_path === null
			? noImageAvailablePlaceHolder
			: 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;
	const movieTitle = movie.title === undefined ? 'No title' : movie.title;

	const imageStyle = {
		width: width,
		paddingBottom: '10px'
	};
	return (
		<img
			width={width}
			alt={`The movie title: ${movieTitle}`}
			src={moviePostImage}
			style={imageStyle}
		/>
	);
};

export default MovieImage;
