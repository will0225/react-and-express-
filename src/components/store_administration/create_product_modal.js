import React, { Component } from 'react';
import '../../../node_modules/bulma-switch/dist/css/bulma-switch.min.css'
import Input from '../basics/input';
import Axios from 'axios';
import { ROOT_URL } from '../../actions';

class	CreateProductModal extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			loading: false,
			available: false,
			datas: {
				name: { value: undefined, error: undefined },
				price: { value: undefined, error: undefined },
				currency: { value: undefined, error: undefined },
				body: { value: undefined, error: undefined },
				title: { value: undefined, error: undefined },
				text: { value: undefined, error: undefined },
				type: { value: undefined, error: undefined },
				brand: { value: undefined, error: undefined },
				quantity: { value: undefined, error: undefined },
				tag: { value: undefined, error: undefined },
				vendor: { value: undefined, error: undefined },
				barcode: { value: undefined, error: undefined },
				product_sku: { value: undefined, error: undefined },
			},
			available: false,
			err: undefined
		}
	}

	renderInput(name, label, placeholder, type) {
		return (
			<Input name={name} type={type} error={this.state.datas[name].error} label={label} placeholder={placeholder} onChange={(e) => {this.validate(e)}}/>
		)
	}

	validate(e) {
		var datas = this.state.datas;
		if (!e.target.value) {
			datas[e.target.name].error = "Required"
		}
		else {
			datas[e.target.name].value = e.target.value;
			datas[e.target.name].error = undefined;
		}
		this.setState({datas: datas})
	}

	createProduct() {
		this.setState({
			loading: true,
			err: ""
		}, () => {
			const datas = this.state.datas;
			Axios({
				method: 'post',
				url: `${ROOT_URL}/product/create`,
				headers: {
					'x-access-token': `${localStorage.getItem("token")}`
				},
				data: {
					name: datas.name.value,
					price: datas.price.value,
					currency: datas.currency.value,
					body: datas.body.value,
					title: datas.title.value,
					text: datas.text.value,
					type: datas.type.value,
					brand: datas.brand.value,
					quantity: parseInt(datas.quantity.value, 10),
					tag: datas.tag.value,
					vendor: datas.vendor.value,
					barcode: datas.barcode.value,
					product_sku: datas.product_sku.value,
					available: this.state.available
				}
				
			}).then(response => {
				this.setState({
					loading: false
				}, () => {
					this.props.close();
				});
			}).catch(err => {
				this.setState({loading: false, err: "Failed to add product"})
			});
		});
	}

	renderErr() {
		if (this.state.err) {
			return (
				<div class="notification is-danger">
					{this.state.err}
				</div>
			)
		}
	}

	isValid() {
		const datas = this.state.datas;
		var valid = true;

		const keys = Object.keys(datas);
		keys.forEach(key => {
			if (datas[key].error != undefined || datas[key].value == undefined) {
				valid = false;
			}
		});
		return valid;
	}

	render() {
		return (
			<div className={"modal " + (this.props.active ? "is-active": "")}>
				<div className="modal-background"></div>
				<div className="modal-card">
					<header className="modal-card-head">
						<p className="modal-card-title">Create a product</p>
						<button onClick={this.props.close} className="delete" aria-label="close"></button>
					</header>
					<section className="modal-card-body">
						{this.renderErr()}
						<div class="field">
							<input id="availibitySwitch" type="checkbox" name="availabilitySwitch" className="switch is-rounded" onChange={() => {this.setState({available: !this.state.available})}}/>
							<label for="availibitySwitch">Available</label>
						</div>
						{this.renderInput("name", "Product name", "name of the product", "text")}
						{this.renderInput("price", "Price", "$AU, €, ...", "number")}
						{this.renderInput("currency", "Currency	", "$/$AU/CA$/€", "text")}
						<div class="field">
							<label for="bodyarea">Description</label>
							<textarea name="body" className="textarea" id="bodyarea" onChange={(e) => {this.validate(e)}}></textarea>
						</div>
						{this.renderInput("title", "Title", "Title of the product", "text")}
						{this.renderInput("text", "Text", "Text", "text")}
						{this.renderInput("type", "Product type", "type of the product", "text")}
						{this.renderInput("brand", "Product brand", "brand of the product", "text")}
						{this.renderInput("quantity", "Quantities", "Number of available quantities", "number")}
						{this.renderInput("tag", "Product tag", "tag of the product", "text")}
						{this.renderInput("vendor", "Product vendor", "vendor", "text")}
						{this.renderInput("barcode", "Product barcode", "barcode of the product", "text")}
						{this.renderInput("product_sku", "Product SKU", "SKU of the product", "text")}
					</section>
					<footer className="modal-card-foot">
						<button onClick={() => {this.createProduct()}} className={"button is-info " + (this.state.loading ? "is-loading" : "")} disabled={!this.isValid()}>Create</button>
						<button onClick={this.props.close} className="button">Cancel</button>
					</footer>
				</div>
			</div>
		)
	}
}

export default CreateProductModal;