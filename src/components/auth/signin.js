import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import '../../style/signin.css';


class Signin extends PureComponent {
    componentDidMount(){
        document.title="Requin | SIGNIN"
      }
    handleFormSubmit({ email, password }) {
        this.props.signinUser({ email, password })
    }

    renderField = ({ input, label, type, meta: { touched, error } }) => (
        <div className="field">
            <label className="label">{label}</label>
            <div className="control">
                <input {...input} className={"input " + ((touched && error) ? "is-danger" : ((touched) ? "is-success" : ""))} placeholder={label} type={type} />
                <p className="help is-danger">{error}</p>
            </div>
        </div>
    );

    renderError() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <string>Oops! {this.props.errorMessage}</string>
                </div>
            );
        }
    }

    render() {
        const { handleSubmit , submitting, invalid, pristine } = this.props;

        return (
            <section className="hero is-fullheight-with-navbar main-container">
                <div className="hero-body columns is-gapless">
                    <div className="column is-12 columns">
                        <div className="container column is-4 is-offset-4 authcontainer ">
                            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                                <h2 className="title is-4">Log in</h2>
                                <Field label="Email" name="email" component={this.renderField} type="text" placeholder="Email address"/>
                                <Field label="Password" name="password" component={this.renderField} type="password" placeholder="Password"/>
                                <p className="help is-danger">{this.renderError()}</p>
                                <button action="submit" className="button is-info signinbutton" disabled={invalid|| submitting || pristine}>Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return { errorMessage: state.auth.error }
};

const validate = values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Required'
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    else if (values.password.length < 5) {
        errors.password = "Password is too short";
    }
    return errors
}

export default reduxForm({
    form: 'signin',
    validate
})(connect(mapStateToProps, actions)(Signin));
