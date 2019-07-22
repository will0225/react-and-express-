import React, { Component } from 'react';
import SideMenu from '../sidemenu';

/**
 * This component is generic to display an error to the user
 * It takes an errorCode and an errorDescription in props.
 * If the current user is logged, it displays the side menu to allow a better navigation in the app
 */
class	Error extends Component {

	constructor() {
		super();
		this.state = {
			auth: (localStorage.getItem("token") ? true : false),
			hideMenu: this.props
		}
	}

	render() {
		return (
			<div className="columns">
				<div className="column">
					{this.state.auth && !this.props.hideMenu ? <SideMenu currentLocation={this.props.location.pathname}/> : <span></span>}
				</div>
				<div className={"column " + ((this.state.auth && !this.props.hideMenu) ? "is-10" : "is-12")}>
					<section class="hero is-large">
						<div class="hero-body">
							<div class="container">
								<h1 class="title">Error {this.props.errorCode}, {this.props.errorDescription}</h1>
								<a href="/" class="button is-danger">Go back to home</a>
							</div>
						</div>
					</section>
				</div>
			</div>
		)
	}
}

export default Error;