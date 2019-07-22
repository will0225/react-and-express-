import React, { Component } from 'react';
import Axios from 'axios';
import { ROOT_URL } from '../../../actions';

class	EmployeesList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			users: []
		}
	}

	componentWillMount() {
		if (this.props.storeId != undefined) {
			this.fetchFromStore();
		}
	}

	fetchFromStore() {
		Axios({
			method: 'get',
			url: `${ROOT_URL}/store/${this.props.storeId}/get_all_users`,
			headers: {
				"x-access-token": `${localStorage.getItem("token")}`
			}
		}).then(response => {
			this.setState({users: response.data.users});
		}).catch(err => {
		});
	}

	renderTagsFor(user) {
		var tags = [];
		if (user.is_company_admin) {
			tags.push(<span className="tag is-danger">administrator</span>)
		}
		if (user.is_manager) {
			tags.push(<span className="tag is-primary">manager</span>)
		}
		if (user.is_storeperson) {
			tags.push(<span className="tag is-info">storeperson</span>)
		}
		return tags;
	}

	render() {
		const users = this.state.users.map(user => {
			return (
				<tr>
					<td>{user.email}</td>
					<td>{this.renderTagsFor(user)}</td>
				</tr>
			);
		});
		return (
			<table className="table">
				<thead>
					<th>Email</th>
					<th>Roles</th>
				</thead>
				<tbody>
					{users}
				</tbody>
				<tfoot>
					{(users.length == 0 ? <p className="is-danger">There are no users at the moment</p> : <div></div>)}
				</tfoot>
			</table>
		)
	}
}

export default EmployeesList;