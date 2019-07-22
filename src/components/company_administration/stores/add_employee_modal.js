import React, { Component } from 'react';
import Input from '../../basics/input';
import { ROOT_URL } from '../../../actions';
import Axios from 'axios';

const ROLE_MANAGER = "Manager";
const ROLE_SALEPERSON = "Saleperson";


class	AddEmployeeModal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			datas: {
				email: {value: undefined, error: undefined},
				password: {value: undefined, error: undefined},
			},
			role: ROLE_SALEPERSON,
			loading: false
		}
	}

	componentWillReceiveProps() {
		this.state = {
			datas: {
				email: {value: undefined, error: undefined},
				password: {value: undefined, error: undefined},
			},
			role: ROLE_SALEPERSON,
			loading: false
		}
	}

	createEmployee() {
		var datas = this.state.datas;

		if (!datas.email.value || !datas.password.value) {
			datas.email.error = !datas.email.value ? "Required" : undefined;
			datas.password.error = !datas.password.value ? "Required" : undefined;
			this.setState({datas: datas});
		}
		else {
			var url = `${ROOT_URL}/user/`
			if (this.state.role == ROLE_MANAGER) {
				url += "create-store-manager";
			}
			else {
				url += "create-storeperson";
			}
			url += `/${this.props.storeId}`
			this.setState({loading: true}, () => {
				Axios({
					method: 'post',
					url: url,
					data: {
						"email": datas.email.value,
						"password": datas.password.value,
					},
					headers: {
						'x-access-token': `${localStorage.getItem("token")}`
					}
				}).then(response => {
					this.setState({loading: false});
					this.props.close();
				}).catch(err => {
					this.setState({loading: false});
				});
			})
		}
	}

	isValid() {
		return this.state.datas.email.value && this.state.datas.password.value;
	}

	renderInput(name, label, placeholder, error, type) {
		return (
			<Input name={name} type={type} error={error} label={label} placeholder={placeholder} onChange={(e) => {this.validate(e)}}/>
		)
	}

	render() {
		return (
			<div className={"modal " + (this.props.active ? "is-active" : "")}>
				<div className="modal-background"></div>
				<div className="modal-card">
					<header className="modal-card-head">
						<p className="modal-card-title">Create an employee</p>
						<button onClick={this.props.close} className="delete" aria-label="close"></button>
					</header>
					<section className="modal-card-body">
						{this.renderInput("email", "Email", "User's email address", this.state.datas.email.error, "text")}
						{this.renderInput("password", "Password", "User's password", this.state.datas.password.error, "password")}
						<p className="title is-6">Role: </p>
						<div class="select">
							<select onChange={(e) => {this.setState({role: e.target.value})}}>
								<option>{ROLE_SALEPERSON}</option>
								<option>{ROLE_MANAGER}</option>
							</select>
						</div>		
					</section>
					<footer className="modal-card-foot">
						<button disabled={!this.isValid()} onClick={() => {this.createEmployee()}} className={"button is-success " + (this.state.loading ? "is-loading" : "")}>Create</button>
						<button onClick={this.props.close} className="button">Cancel</button>
					</footer>
				</div>
			</div>
		);
	}

	validate(e) {
		var datas = this.state.datas;
		if (e.target.name == "email") {
			if (e.target.value) {
				datas.email.value = e.target.value;
				datas.email.error = undefined;
			}
			else {
				datas.email.error = "Required";
			}
		}
		else if (e.target.name == "password") {
			if (e.target.value) {
				datas.password.value = e.target.value;
				datas.password.error = undefined;
			}
			else {
				datas.password.error = "Required";
			}
		}
		this.setState({datas: datas});
	}
}

export default AddEmployeeModal;