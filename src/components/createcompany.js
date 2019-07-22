import React, { Component } from 'react';
import Input from './basics/input';
import axios from 'axios';
import History from '../history';
import {ROOT_URL} from '../actions/index';
import DropDown from './basics/dropdown';

class	CreateCompany extends Component {

	constructor() {
		super();
		this.validate = this.validate.bind(this);
		this.state = {
			datas: {
				"company_name": {value: undefined, error: undefined},
				"user_email": {value: undefined, error: undefined},
				"user_password": {value: undefined, error: undefined},
			},
			loading: false
		}
	}

	createCompany() {
		var companyName = this.state.datas["company_name"].value;
		var user_email = this.state.datas["user_email"].value;
		var user_password = this.state.datas["user_password"].value;

		this.setState({
			loading: true
		});
		/**
		 * Need to connect with the API
		 */
		axios({
			method: 'post',
			url: `${ROOT_URL}/user/create-company-admin`,
			data: {
				company_name: companyName,
				email: user_email,
				password: user_password
			},
			headers: {
				"x-access-token": `${localStorage.getItem("token")}`
			}
		})
		.then(response => {
			this.setState({
				loading: false
			});

		}).catch((err) => {
			this.setState({
				error: "Can't connect with the remote server",
				loading: false
			})
		});
	}

	selectUser(user) {
		this.setState({
			selectedUser: user
		}, () => {
		});
	}

	renderError(name) {
		return (this.state.datas[name].error);
	}

	renderInput(name, placeholder, type, label) {
		return (<Input name={name} placeholder={placeholder} type={type} label={label} error={this.renderError(name)} onInput={this.validate} />)
	}

	formIsValid() {
		var success = true;

		for (var key in this.state.datas) {
			if (this.state.datas[key].error != undefined || this.state.datas[key].value == undefined) {
				success = false;
			}
		}
		return success;
	}

	render() {
		return (
			<section className="hero is-fullheight-with-navbar">
				<div className="hero-body columns is-gapless">
					<div className="column is-12 columns" style={{ height:"600px"}}>
						<div className="container column is-4 is-offset-4">
							<div>
								{this.renderInput("company_name", "Name of the company", "text", "Company name:")}
								{this.renderInput("user_email", "New user administrator", "text", "User email:")}
								{this.renderInput("user_password", "New user's password", "password", "User password:")}
								<button onClick={this.createCompany.bind(this)} action="submit" className={"button is-info signinbutton " + (this.state.loading ? "is-loading": "")} disabled={!this.formIsValid()}>Create</button>
							</div>
						</div>
					</div>
				</div>
			</section>

		)
	}

	validate(e) {
		var datas = this.state.datas;

		if (!e.target.value) {
			datas[e.target.name].error = "Required";
		}
		else {
			datas[e.target.name].value = e.target.value;
			datas[e.target.name].error = undefined;
		}

		this.setState({
			datas: datas
		});
	}
}

export default CreateCompany;