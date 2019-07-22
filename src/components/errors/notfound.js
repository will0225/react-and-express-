import React, { Component } from 'react';
import Error from './error';

class	NotFound extends Component {

	render() {
		return (
			<Error {...this.props} errorCode={404} errorDescription="This page doesn't exist yet, maybe one day"/>
		)
	}
}

export default NotFound;