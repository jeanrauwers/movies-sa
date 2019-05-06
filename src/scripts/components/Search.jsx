import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Search = ({ search }) => {
	const [searchValue, setSearchValue] = useState('');
	const [inputIsValid, setInputIsValid] = useState(true);
	const inputValueHandler = evt => {
		setSearchValue(evt.target.value);
	};
	const resetInputField = () => {
		setSearchValue('');
	};
	const searchQueryHandler = evt => {
		evt.preventDefault();
		if (!searchValue.replace(/\s/, '').length) {
			messageValidator();
			return;
		}
		search(searchValue);
		resetInputField();
	};

	const messageValidator = () => {
		setInputIsValid(false);
		setTimeout(() => {
			setInputIsValid(true);
		}, 2000);
	};
	return (
		<>
			<Form className="search-form">
				<Input value={searchValue} onChange={inputValueHandler} type="text" />
				<Input onClick={searchQueryHandler} type="submit" value="SEARCH" />
			</Form>
		</>
	);
};
export default Search;
