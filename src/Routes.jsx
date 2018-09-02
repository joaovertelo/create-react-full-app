import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './app/home/Home';

class Routes extends Component {
	render() {
		return (
			<React.Fragment>
				<Route path="/" exact component={Home} />;
			</React.Fragment>
		);
	}
}

export default Routes;
