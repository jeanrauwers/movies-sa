import React from 'react';
import ReactDOM from 'react-dom';

function showTime() {
	const myElement = (
		<div>
			<h1>My webpack container!</h1>
			<h2>{new Date().toLocaleTimeString()}</h2>
		</div>
	);

	ReactDOM.render(myElement, document.getElementById('main'));
}

setInterval(showTime, 1000);

export const sumOf = (a, b) => a + b;
