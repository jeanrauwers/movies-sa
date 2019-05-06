import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const searchQueryHandler = (evt, search, searchValue, setInputIsValid) => {
	evt.preventDefault();
	if (!searchValue.replace(/\s/, '').length) {
		messageValidator(setInputIsValid);
		return;
	}

	search(searchValue.toString());
	resetInputField(setInputIsValid);
};

const messageValidator = setInputIsValid => {
	setInputIsValid(false);
	setTimeout(() => {
		setInputIsValid(true);
	}, 2000);
};

const resetInputField = setSearchValue => {
	setSearchValue('');
};

const Search = ({ search }) => {
	const [searchValue, setSearchValue] = useState('');
	const [inputIsValid, setInputIsValid] = useState(true);

	const inputValueHandler = evt => {
		setSearchValue(evt.target.value);
	};
	return (
		<>
			<Form className="search-form">
				<Input value={searchValue} onChange={inputValueHandler} type="text" />
				<Input
					onClick={evt =>
						searchQueryHandler(evt, search, searchValue, setInputIsValid)
					}
					type="submit"
					value="SEARCH"
				/>
			</Form>
		</>
	);
};
export default Search;
