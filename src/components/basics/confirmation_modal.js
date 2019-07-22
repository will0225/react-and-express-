import React, { Component } from 'react';

class ConfirmationModal extends Component {

	render() {
		return (
			<div className={"modal " + (this.props.active ? "is-active" : "")}>
				<div className="modal-background"></div>
				<div className="modal-card">
					<header className="modal-card-head">
						<p className="modal-card-title">Are you sure ?</p>
						<button onClick={this.props.cancel} className="delete" aria-label="close"></button>
					</header>
					<section className="modal-card-body">
						This action can't be revert. 
					</section>
					<footer className="modal-card-foot">
						<button onClick={this.props.confirm} className="button is-danger">Confirm</button>
						<button onClick={this.props.cancel} className="button">Cancel</button>
					</footer>
				</div>
			</div>
		)
	}
}

export default ConfirmationModal;