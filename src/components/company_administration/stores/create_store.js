import React, { Component } from 'react';
import axios from 'axios';
import {ROOT_URL} from '../../../actions/index';

class	CreateStore extends Component {

	constructor(props) {
		super(props);
		this.state = {
			store_name: {
				error: undefined,
				value: undefined
			},
			store_location: {
				error: undefined,
				value: ""
			},
			loading: false,
			error: ""
		};
	}


	componentWillReceiveProps() {
		this.setState({
			store_name: {
				error: undefined,
				value: undefined,
				touched: false
			},
			store_location: {
				error: undefined,
				value: undefined,
				touched: false
			},
			loading: false,
			error: ""
		});
	}

	handleChange(e) {
		var currentInfos = this.state[e.target.name];
		if (!e.target.value) {
			currentInfos.error = "Required";
		}
		else {
			currentInfos.touched = true;
			currentInfos.value = e.target.value;
			currentInfos.error = undefined;
		}
		this.setState(currentInfos);
	}

	renderField(label, name, error, touched) {
		return (
			<div className="field">
				<label className="label">{label}</label>
				<div className="control">
					<input name={name} className={"input " + ((error) ? "is-danger" : ((touched) ? "is-success" : ""))} placeholder={label} type="text" onChange={this.handleChange.bind(this)}/>
					<p className="help is-danger">{error}</p>
				</div>
			</div>
		);
	}

	isValid() {
		return !(!this.state.store_location.error && this.state.store_location.value != undefined && this.state.store_name.value != undefined && !this.state.store_name.error);
	}

	createStore() {
		this.setState({
			loading: true
		});
		axios({
			method: 'post',
			url: `${ROOT_URL}/store/create`,
			data: {
				name: this.state.store_name.value,
				location: this.state.store_location.value,
				brand_id: JSON.parse(localStorage.getItem("user")).company_id
			},
			headers: {
				"x-access-token": `${localStorage.getItem("token")}`
			}
		}).then(reponse => {
			this.props.close();
		}).catch(err => {
			this.setState({
				loading: false,
				error: "Can't reach remote server."
			})
		});
	}
	
	render() {
		return (
			<div className={"modal " + (this.props.active ? "is-active" : "")}>
				<div className="modal-background"></div>
				<div className="modal-card">
					<header className="modal-card-head">
						<p className="modal-card-title">Create a new store</p>
						<button className="delete" aria-label="close" onClick={this.props.close}/>
					</header>
					<section className="modal-card-body">
						{this.renderField("Name", "store_name", this.state.store_name.error, this.state.store_name.touched)}
						{this.renderField("Location", "store_location", this.state.store_location.error, this.state.store_location.touched)}
						<p className="help is-danger"> {this.state.error} </p>
					</section>
					<footer className="modal-card-foot">
						<button className={"button is-info " + (this.state.loading ? "is-loading" : "")} onClick={this.createStore.bind(this)} disabled={this.isValid()}>Create store</button>
						<button className="button" onClick={this.props.close}>Cancel</button>
					</footer>
				</div>
			</div>
		);
	}
}

export default CreateStore;