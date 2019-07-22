import React, { Component } from 'react';
import Axios from 'axios';
import { ROOT_URL } from '../../actions';
import NotificationDanger from '../basics/notification_danger';
import ProductCard from './product_card';

class	ProductList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			products: [],
			loading: false,
			err: undefined
		}
	}

	componentWillMount() {
		this.fetchProducts();
	}

	fetchProducts() {
		Axios({
			method: 'get',
			url: `${ROOT_URL}/product/get-product-by-store/${this.props.storeId}`,
			headers: {
				'x-access-token': `${localStorage.getItem("token")}`
			}
		}).then(response => {
			this.setState({
				products: response.data.products,
				loading: false,
				err: undefined
			})
		}).catch(err => {
			this.state({loading: false, err: `Failed to fetch products for ${this.props.storeId}`})
		});
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

	render() {
		const products = this.state.products.map(product => {
			return (<div className="column is-4"><ProductCard product={product} reloadProducts={() => {this.fetchProducts()}}/></div>)
		})
		return (
			<div>
				{this.renderErr()}
				<div className="columns is-multiline">
					{products}
				</div>
			</div>
		)
	}
}

export default ProductList;