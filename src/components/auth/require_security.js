import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    USER_ADMIN,
    USER_BRAND_ADMIN,
    USER_STORE_MANAGER,
	USER_SALEPERSON,
	USER_NOTHING
} from '../../actions/types';
import Unauthorized from '../errors/unauthorized';


export default function (types, ComposedComponent) {
    class Authentication extends Component {
        static contextTypes = {
            router: PropTypes.object
        }

        componentWillMount() {
            if (!this.props.authenticated) {
                this.props.history.push('/signin');
			}
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.props.history.push('/signin');
            }
        }

        render() {
			if (this.props.authorized) {
				return <ComposedComponent {...this.props} user={JSON.parse(localStorage.getItem("user"))}/>
			}
			else {
				return (
					<Unauthorized/>
				)
			}
        }
    }

    function mapStateToProps(state) {
		var	mapState = {
			authenticated: state.auth.authenticated,
			authorized: false
		}
		if (state.auth.authenticated) {
			const user = JSON.parse(localStorage.getItem("user"));
			var userAuthorizations = {
				isAdmin: user ? user.is_admin : false,
				isCompanyAdmin: user ? user.is_company_admin : false,
				isManager: user ? user.is_manager : false,
				isStorePerson: user ? user.is_storeperson : false
			}	
			types.some(type => {
				switch(type) {
					case (USER_NOTHING):
						mapState.authorized = !userAuthorizations.isAdmin && !userAuthorizations.isCompanyAdmin && !userAuthorizations.isManager && !userAuthorizations.isStorePerson;
						break;
					case (USER_ADMIN):
						mapState.authorized = userAuthorizations.isAdmin;
						break;
					case (USER_BRAND_ADMIN):
						mapState.authorized = userAuthorizations.isCompanyAdmin;
						break;
					case (USER_STORE_MANAGER):
						mapState.authorized = userAuthorizations.isManager;
						break;
					case (USER_SALEPERSON):
						mapState.authorized = userAuthorizations.isStorePerson;
						break;
					default:
						break;
				};
				if (mapState.authorized) {
					return true;
				}
			});
		}

		return mapState;
    }

    return connect(mapStateToProps)(Authentication);
}
