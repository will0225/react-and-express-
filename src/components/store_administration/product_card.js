import React, { Component } from 'react';
import '../../style/product_card.css';
import ProductPictureForm from './product_picture_form';
import Axios from 'axios';
import { ROOT_URL } from '../../actions';

class	ProductCard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isUploadingAPicture: false,
			isDeleting: false
		}
	}

	renderImageUrl() {
		if (this.props.product.image_src) {
			return this.props.product.image_src;
		}
		else {
			return "https://bulma.io/images/placeholders/1280x960.png";
		}
	}

	deleteProduct() {
		/*this.setState({isDeleting: true}, () => {
			Axios({
				method: 'delete',
				url: `${ROOT_URL}/product/delete-product/${this.props.product.public_id}`,
				headers: {
					'x-access-token': `${localStorage.getItem("token")}`
				}
			}).then(response => {
				this.setState({isDeleting: false}, () => {
					this.props.reloadProducts();
				});
			}).catch(err => {
				this.setState({isDeleting: false})
			})
		});*/
	}

	render() {
		return (
			<div className="card">
				<div className="card-image">
					<figure className="image is-4by3">
						<img src={this.renderImageUrl()} alt="Product's image"/>
					</figure>
				</div>
				<div className="card-content">
					<div className="content">
						<p className="title is-5">{this.props.product.name}</p>
						<p className="product-description">{this.props.product.text}</p>
						<div className="buttons">
							<button className="product-upload-picture" onClick={() => {this.setState({isUploadingAPicture: true})}}>Upload picture</button>
							<button className={"product-delete" + (this.state.isDeleting ? "is-loading" : "")} onClick={() => {this.deleteProduct()}}>Delete</button>
						</div>
					</div>
				</div>
				<ProductPictureForm product_id={this.props.product.public_id} active={this.state.isUploadingAPicture} close={() => {this.setState({isUploadingAPicture: false}, () => {this.props.reloadProducts()})}}/>
			</div>
		)
	}
}

export default ProductCard;