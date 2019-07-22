import React, { Component } from 'react';
import Axios from 'axios';
import { ROOT_URL } from '../../actions';
import NotificationDanger from '../basics/notification_danger';


class	ProductPictureForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			files: undefined,
			err: undefined
		}
	}
	
	uploadImage() {
		this.setState({loading: true, err: undefined}, () => {
			var formData = new FormData();

			const files = Array.from(this.state.files);
			files.forEach((file, i) => {
				formData.append("user_file", file)
			});
			fetch(`${ROOT_URL}/product/upload-image/${this.props.product_id}`, {
				method: 'POST',
				body: formData,
				headers: {
					'x-access-token': `${localStorage.getItem("token")}`,
				}
			}).then(response => {
				this.setState({loading: false}, () => {
					this.props.close();
				});
			}).catch(err => {
				this.setState({err: "Failed to upload image, please try later", loading: false});
			})
		});
	}

	isValid() {
		return this.state.files != undefined;
	}

	renderErr() {
		if (this.state.err) {
			return (
				<NotificationDanger>
					{this.state.err}
				</NotificationDanger>
			)
		}
	}

	render() {
		return (
			<div className={"modal " + (this.props.active ? "is-active" : "")}>
				<div className="modal-background"></div>
				<div className="modal-card">
					<header className="modal-card-head">
						<p className="modal-card-title">Upload an image</p>
						<button onClick={this.props.close} className="delete" aria-label="close"></button>
					</header>
					<section className="modal-card-body">
						{this.renderErr()}
						<input type="file" name="user_file" accept="image/*" onChange={(e) => {this.setState({files: e.target.files})}}/>
					</section>
					<footer className="modal-card-foot">
						<button disabled={!this.isValid()} onClick={() => {this.uploadImage()}} className={"button is-success " + (this.state.loading ? "is-loading" : "")}>Create</button>
						<button onClick={this.props.close} className="button">Cancel</button>
					</footer>
				</div>
			</div>
		);
	}
}

export default ProductPictureForm;