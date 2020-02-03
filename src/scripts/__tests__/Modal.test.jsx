import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Modal from '../components/Modal';


describe('Testing Modal component', () => {
  const movieObj = {
    title: 'test',
    vote_average: 4,
    overview: 'movie overview',
    backdrop_path: 'test',
  };
  const movieModal = shallow(<Modal movie={movieObj} />);
  test('should have vote_average of 4', () => {
    expect(movieModal.find('h3').text()).toEqual(
      `Average Rating : ${movieObj.vote_average}`,
    );
  });
  test('should have overview of movie overview', () => {
    expect(movieModal.find('[data-automation="synopsis"]').text()).toEqual(
      `Synopsis:${movieObj.overview}`,
    );
  });
});
