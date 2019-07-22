import React, { Component } from 'react';

class	DropDown extends Component {

	selectChoice(e) {
		if (e.target.value !== this.props.defaultOption) {
			this.props.onSelect(e.target.value);
		}
		else {
			this.props.onSelect(undefined);
		}
	}

	render() {
		const options = this.props.choices.map(choice => {
			return (<option>{choice}</option>);
		});
		return (
			<div class="field">
				<label className="label">{this.props.label}</label>
				<div class="control has-icons-left">
					<div class="select">
						<select onChange={this.selectChoice.bind(this)}>
							<option selected>{this.props.defaultOption}</option>
							{options}
						</select>
					</div>
					<span class="icon is-small is-left">
						<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 192 192" style={{fill:"#000000"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#cccccc"><g id="surface1"><path d="M96,30c-23.13281,0 -42,18.86719 -42,42c0,14.46094 7.38281,27.30469 18.5625,34.875c-21.39844,9.1875 -36.5625,30.42188 -36.5625,55.125h12c0,-26.57812 21.42188,-48 48,-48c26.57813,0 48,21.42188 48,48h12c0,-24.70312 -15.16406,-45.9375 -36.5625,-55.125c11.17969,-7.57031 18.5625,-20.41406 18.5625,-34.875c0,-23.13281 -18.86719,-42 -42,-42zM96,42c16.64063,0 30,13.35938 30,30c0,16.64063 -13.35937,30 -30,30c-16.64062,0 -30,-13.35937 -30,-30c0,-16.64062 13.35938,-30 30,-30z"></path></g></g></g></svg>
					</span>
				</div>
			</div>
		);
	}
}

export default DropDown;