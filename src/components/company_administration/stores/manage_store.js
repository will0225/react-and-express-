import React, { Component } from 'react';
import EmployeesList from './employees_list';
import AddEmployeeModal from './add_employee_modal';

class ManageStore extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tabs: [
				{active: true, name: "Employees"},
				{active: false, name: "Sales"}
			],
			add_employee_modal_active: false
		}
	}

	renderTabs() {
		const tabs = this.state.tabs.map((tab, i) => {
			return (<li key={i} className={(tab.active ? "is-active": "")}><a onClick={() => {this.toggle(tab.name)}}>{tab.name}</a></li>)
		});
		return tabs;
	}

	active() {
		const active = this.state.tabs.find((tab) => {
			return tab.active
		});
		return active;
	}
	
	toggle(name) {
		var state = this.state;

		state.tabs.forEach((tab) => {
			if (tab.name == name) {
				tab.active = true;
			}
			else {
				tab.active = false;
			}
		});
		this.setState(state);
	}

	renderActiveTab() {
		if (this.active() == "employees") {
			return (this.renderEmployeesList());
		}
		else {
			return (this.renderEmployeesList());
		}
	}

	renderEmployeesList() {
		const { id } = this.props.match.params;
		return <EmployeesList storeId={id}/>
	}

	renderSalesList() {

	}
	componentDidMount(){
		document.title = "Requin | Manage"
	}

	render() {
		return (
			<div style={{ backgroundColor:"whtie"}}>
				<div className="tabs">
					<ul>
						{this.renderTabs()}
					</ul>
				</div>
				<div className="buttons">
					<button className="create_product_button" onClick={() => {this.setState({add_employee_modal_active: true})}}>Add new employee</button>
				</div>
				{this.renderActiveTab()}
				<AddEmployeeModal storeId={this.props.match.params.id} active={this.state.add_employee_modal_active} close={() => {this.setState({add_employee_modal_active: false})}} />
			</div>
		);
	}
}

export default ManageStore;