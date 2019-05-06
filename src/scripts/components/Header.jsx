import React from 'react';

const Header = ({ title }) => {
	return (
		<header className="header">
			<h2>{title ? title : ''}</h2>
		</header>
	);
};

export default Header;
