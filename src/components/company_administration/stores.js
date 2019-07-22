import React, { Component } from 'react';
import Store from './stores/store';
import '../../style/stores.css';
import CreateStore from './stores/create_store';
import axios from 'axios';
import {ROOT_URL} from '../../actions/index';

class	Stores extends Component {

	constructor() {
		super();
		this.state = {
			isCreatingStore: false,
			stores: []
		}
	}
	componentDidMount(){
        document.title="Requin | Stores"
      }
	componentWillMount() {
		this.loadStores();
	}

	loadStores() {
		const companyId = JSON.parse(localStorage.getItem("user")).company_id;
		axios({
			method: 'get',
			url: `${ROOT_URL}/store/get-store-by-company/${companyId}`
		}).then(response => {
			this.setState({stores: response.data.stores});
		}).catch(err => {
			this.setState({stores: []});
		});
	}

	deleteStore(storeId) {
	}

	editStore(storeId) {
	}

	manageStore(storeId) {
		this.props.history.push(`/stores/${storeId}`);
	}

	createStore() {
		this.setState({
			isCreatingStore: true
		});
	}

	closeCreateStoreModal() {
		this.setState({
			isCreatingStore: false
		}, () => {
			this.loadStores();
		});
	}

	render() {console.log(this.state.isCreatingStore)
		var stores = this.state.stores.map((item, key) =>
			<div key={item.id} className="column is-4">
				<Store storeId={item.id} name={item.name} location={item.location} employees={item.employees} orders={item.orders} createdAt={item.created_at} delete={this.deleteStore.bind(this)} manage={this.manageStore.bind(this)} edit={this.editStore.bind(this)} />
			</div>
		);
		return (
			<div className="columns is-multiline storecontainer">
				{stores}

				<div className="column is-4">
					<div className="card has-text-centered storecard newstore is-vertical-center">
						<div className="card-content">
							<button className="button is-info" onClick={this.createStore.bind(this)}>
								<span className="icon">
									<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 210 210"><g fill="none" fillRule="none" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><path d="M0,210v-210h210v210z" fill="none" fillRule="nonzero"/><g fill="#ffffff" fillRule="evenodd"><g id="surface1"><path d="M96.25,17.5v78.75h-78.75v17.5h78.75v78.75h17.5v-78.75h78.75v-17.5h-78.75v-78.75z"/></g></g></g></svg>
								</span>
								<span> New store </span>
							</button>
						</div>
					</div>
				</div>
				<CreateStore active={this.state.isCreatingStore} close={this.closeCreateStoreModal.bind(this)} />
			</div>
		)
	}
}

export default Stores;