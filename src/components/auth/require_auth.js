import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SideMenu from '../sidemenu';

export default function (ComposedComponent, optional) {
    class Authentication extends Component {
        static contextTypes = {
            router: PropTypes.object
        }

        componentWillMount() {
            if (!optional && !this.props.authenticated) {
                this.props.history.push('/signin');
            }
        }

        componentWillUpdate(nextProps) {
            if (!optional && !nextProps.authenticated) {
                this.props.history.push('/signin');
            }
        }

        render() {
            if (this.props.authenticated) {
                return (
                    <div className="columns" style={{ backgroundColor:'white'}}>
                        <div className="column">
                            <SideMenu currentLocation={this.props.location.pathname}/>
                        </div>
                        <div className="column is-10" style={{ marginTop:"70px"}}>
                            <ComposedComponent {...this.props} user={JSON.parse(localStorage.getItem("user"))}/>
                        </div>
                    </div>
                )    
            }
            else {
                return (
                    <div className="columns">
                        <div className="column is-12">
                            <ComposedComponent {...this.props} user={JSON.parse(localStorage.getItem("user"))}/>
                        </div>
                    </div>
                )    
            }
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.auth.authenticated };
    }

    return connect(mapStateToProps)(Authentication);
}
