import React from 'react';

const Header = ({ title }) => {
	document.title = title ? title : '';
	return (
		<header className="header">
			<h1>{title ? title : ''}</h1>
		</header>
	);
};

export default Header;
