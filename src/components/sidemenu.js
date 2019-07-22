import React, { Component } from 'react';
import '../style/sidemenu.css'
import Axios from 'axios';
import { ROOT_URL } from '../actions';

class	SideMenu extends Component {

	constructor() {
		super();
		const user = JSON.parse(localStorage.getItem("user"));
		this.state = {
			isAdmin: user ? user.is_admin : false,
			isCompanyAdmin: user ? user.is_company_admin : false,
			isManager: user ? user.is_manager : false,
			isStorePerson: user ? user.is_storeperson : false,
			storeName: "Manage my store"
		}
	}

	componentWillMount() {
		if (this.state.isManager) {
			Axios({
				method: 'get',
				url: `${ROOT_URL}/store/get/${JSON.parse(localStorage.getItem("user")).store_id}`,
				headers: {
					"x-access-token": `${localStorage.getItem("token")}`
				}
			}).then(response => {
				this.setState({
					storeName: response.data.store.name
				})
			}).catch(err => {
			})
		}
	}

	renderMenuLink(name, to) {
		return (
			<a className={(this.props.currentLocation.startsWith(to) || this.props.currentLocation === (to + "/")) ? "is-active" : ""} 
				href={to} style={{ color:'gray'}}>{name}</a>
		)
	}

	renderAdminMenu() {
		if (this.state.isAdmin) {
			return (
				<div className="submenu">
					<p className="menu-label" style={{ color:'gray'}}>
						Administration
					</p>
					<ul className="menu-list">
						<li style={{ width:'100%',  color:"gray"}}>{this.renderMenuLink("Create a company", "/createcompany")}</li>
						<li style={{ width:'100%',  color:"gray"}}>{this.renderMenuLink("Companies", "/companies")}</li>
					</ul>
				</div>
			)
		}
		else
			return (<div></div>)
	}

	renderCompanyAdminMenu() {
		if (this.state.isCompanyAdmin) {
			return (
				<div className="submenu">
					<p className="menu-label" style={{ color:'gray'}}>
						Manage my company
					</p>
					<ul className="menu-list">
						<li style={{ width:'100%',  color:"gray"}}>{this.renderMenuLink("Dashboard", "/dashboard")}</li>
						<li style={{ width:'100%',  color:"gray"}}>{this.renderMenuLink("Stores", "/stores")}</li>
					</ul>
				</div>
			)
		}
		else
			return (<div></div>)
	}

	renderManagerMenu() {
		if (this.state.isManager) {
			return (
				<div className="submenu">
					<p className="menu-label" style={{ color:'gray'}}>
						{this.state.storeName}
					</p>
					<ul className="menu-list">
						<li style={{ width:'100%',  color:"gray"}}>{this.renderMenuLink("Manage", `/stores/${JSON.parse(localStorage.getItem("user")).store_id}`)}</li>
						<li style={{ width:'100%',  color:"gray"}}>{this.renderMenuLink("Products", "/store/products")}</li>
					</ul>
				</div>
			)
		}
		else
			return (<div></div>)
	}

	renderStorePersonMenu() {
		if (this.state.isManager) {
			return (
				<div className="submenu">
					<p className="menu-label" style={{ color:'gray'}}>
						My statistics
					</p>
					<ul className="menu-list">
						<li style={{ width:'100%',  color:"gray"}}>{this.renderMenuLink("Business Intelligence", "/store/products")}</li>
					</ul>
				</div>
			)
		}
		else
			return (<div></div>)
	}

	renderNewUserMenu() {
		if (!this.state.isAdmin && !this.state.isCompanyAdmin && !this.state.isManager && !this.state.isStorePerson) {
			return (
				<div className="submenu">
					<p className="menu-label" style={{ color:'gray'}}>
						Get started
					</p>
					<ul className="menu-list">
						<li style={{ width:'100%',  color:"gray"}}>{this.renderMenuLink("Why us ?", "/whyus")}</li>
					</ul>
				</div>
			)
		}
	}

	render() {console.log(this.props)
		return (
			<div className="columns menucontainer" style={{ marginTop:'80px'}}>
				<div className="column is-12">
					<aside className="menu" style={{ height:'50%'}}>
						{this.renderAdminMenu()}
						{this.renderCompanyAdminMenu()}
						{this.renderManagerMenu()}
						{this.renderStorePersonMenu()}
						{this.renderNewUserMenu()}
					</aside>
				</div>
			</div>
		)
	}
}

export default SideMenu;