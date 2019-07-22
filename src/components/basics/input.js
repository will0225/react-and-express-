import React, {Component} from 'react';

class	Input extends Component {

	render() {
		return (
			<div className="field">
				<label className="label">{this.props.label}</label>
				<div className="control">
					<input className={"input " + (this.props.error ? "is-danger" : "")} {...this.props}/>
					<p className="help is-danger">{this.props.error}</p>
	            </div>
			</div>
		)
	}
}

export default Input;