import React, { Component } from 'react';
import '../../../style/store.css';
import ConfirmationModal from '../../basics/confirmation_modal';

class	Store extends Component {

	constructor() {
		super();
		this.state = {
			confirmeDeleteStore: false
		};
	}

	deleteStore() {
		this.setState({
			confirmeDeleteStore: true
		});
	}

	cancelDeleteStore() {
		this.setState({
			confirmeDeleteStore: false
		});
	}

	deleteStoreConfirmed() {
		this.setState({
			confirmeDeleteStore: false
		});
		this.props.delete(this.props.storeId);
	}

	render() {
		return (
			<div className="card storecard" >
				<header className="card-header">
					<p className="card-header-title">
						{this.props.name}
					</p>
				</header>
				<div className="card-content">
					<div className="content">
						<p> Location: <span className="title is-6">{this.props.location}</span></p>
						<p>Since <time>{this.props.createdAt}</time></p>
					</div>
				</div>
				<footer className="card-footer">
					<a onClick={() => {this.props.manage(this.props.storeId)}} className="card-footer-item">Manage</a>
					<a onClick={() => {this.props.edit(this.props.storeId)}} className="card-footer-item">Edit</a>
					<a onClick={() => {this.deleteStore.bind(this)()}} className="card-footer-item is-danger">Delete</a>
				</footer>
				<ConfirmationModal active={this.state.confirmeDeleteStore} cancel={this.cancelDeleteStore.bind(this)} confirm={this.deleteStoreConfirmed.bind(this)} />
			</div>
		);
	}
}

export default Store;