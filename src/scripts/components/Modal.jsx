import React from 'react';
import MovieImage from './MovieImage';
import MovieTitle from './MovieTitle';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalComponent = ({ movie, modal, setModalIsOpen }) => {
	const isOpenToggle = () => {
		setModalIsOpen(!modal);
	};

	const movieOverview = movie ? movie.overview : '';
	const avRating = movie ? movie.vote_average : '';

	return (
		<div>
			<Modal isOpen={modal} toggle={isOpenToggle}>
				<ModalHeader toggle={isOpenToggle}>
					<MovieTitle movie={movie} />
				</ModalHeader>
				<ModalBody>
					<h3>Average Rating : {avRating}</h3>
					<MovieImage movie={movie} width={'100%'} />
					Synopsis:{movieOverview}
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={isOpenToggle}>
						Close
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default ModalComponent;
