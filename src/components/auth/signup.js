import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import '../../style/signin.css';

class Signup extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            state : "signup"
        }
    }
    componentDidMount(){
        document.title="Requin | SIGNUP"
      }
    handleFormSubmit(formProps) {
        this.props.signupUser(formProps)
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
        const { handleSubmit, submitting, invalid, pristine } = this.props;

        return (
            <section className="hero is-fullheight-with-navbar main-container" style={{ backgroundColor:"black"}}>
                <div className="hero-body columns is-gapless">
                    <div className="column is-12 columns">
                        <div className="container column is-4 is-offset-4 authcontainer ">
                            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                                <Field name="email" label="Email" component={this.renderField} type="text" />
                                <Field name="password" label="Password" component={this.renderField} type="password" />
                                <Field name="passwordConfirmation" label="Password Confirmation" component={this.renderField} type="password" />
                                {this.renderError()}
                                <button action="submit" className="button is-primary signinbutton" disabled={invalid|| submitting || pristine}>Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Please enter a email address';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Please enter a password';
    }
    else if (values.password.length < 8) {
        errors.password = "Length must be more than 7";
    }
    if (!values.passwordConfirmation) {
        errors.passwordConfirmation = 'Please enter a password confirmation';
    }
    if (values.password !== values.passwordConfirmation) {
        errors.passwordConfirmation = 'Passwords must match';
    }
    return errors;
};

const mapStateToProps = (state) => {
    return { errorMessage: state.auth.error }
};

export default reduxForm({
    form: 'signin',
    validate
})(connect(mapStateToProps, actions)(Signup));
