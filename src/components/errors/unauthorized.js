import React, { Component } from 'react';
import Error from './error';

class	Unauthorized extends Component {

	render() {
		return (
			<Error {...this.props} hideMenu={true} errorCode={500} errorDescription="Unauthorized access to this page, if you think this is an error, please contact us at contact@revine.com.au" />
		)
	}
}

export default Unauthorized;