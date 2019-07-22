import React, { Component } from 'react';
import CreateProductModal from './create_product_modal';

import '../../style/products.css';
import ProductList from './products_list';

class	Products extends Component {

	constructor(props) {
		super(props);
		this.state = {
			create_product_active: false
		}
	}
	componentDidMount(){
        document.title="Requin | Stores"
      }
	render() {
		return (
			<div className="container">
				<div className="buttons">
					<button className="button is-dark" onClick={() => {this.setState({create_product_active: true})}} className="create_product_button">Create Product</button>
				</div>
				<CreateProductModal active={this.state.create_product_active} close={() => {this.setState({create_product_active: false})}}/>
				<div>
					<ProductList storeId={JSON.parse(localStorage.getItem("user")).store_id} />
				</div>
			</div>
		);
	}
}

export default Products;