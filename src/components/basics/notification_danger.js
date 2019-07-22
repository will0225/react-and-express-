import React, { Component } from 'react';

class	NotificationDanger extends Component {

	render() {
		return (
			<div class="notification is-danger">
				{this.props.children}
			</div>
		);
	}
}

export default NotificationDanger;