import React from 'react';
import { shallow } from 'enzyme';
import MovieTitle from '../components/MovieTitle';

describe('Testing MovieTitle component', () => {
  const movieObj = {
    title: 'test',
    backdrop_path: 'test',
  };
  const movieTitle = shallow(<MovieTitle movie={movieObj} />);
  test('should have text value of movieObjt.title', () => {
    expect(movieTitle.find('div').text()).toEqual(movieObj.title);
  });
});
