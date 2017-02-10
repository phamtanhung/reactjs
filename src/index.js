import React from 'react';
import { render } from 'react-dom';

class Header extends React.Component {
	render() {
		const version = {
			major: 0,
			minor: 1
		};
		return (
			<div>
				<h1>Task Manager v.{version.major}.{version.minor}</h1>
			</div>
		);
	}
}

// render Clock component
render(
	<Header />,
	document.getElementById('root')
);
