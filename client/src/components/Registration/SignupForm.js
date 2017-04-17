import React from 'react';
import validateInput from './inputValidation'
import TextFieldGroup from '../common/TextFieldGroup';
import { hashHistory } from 'react-router';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password : '',
            passwordConfirmation : '',
            errors : {},
            isLoading : false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState ({ [e.target.name] : e.target.value});
    }

    isValid() {
        const {errors, isValid} = validateInput(this.state);

        if (!isValid) {
            this.setState({errors});
        }

        return isValid;
    };

    onSubmit(e) {
        e.preventDefault();

        this.setState({errors : {}, isLoading : true });
        this.props.userSignupRequest(this.state).then(
            () => {
                hashHistory.push('/');
                this.props.addFlashMessage({
                    type : 'success',
                    text : 'Registration is successful! Get ready for Hunting!'
                });
            },
            (err) => this.setState({errors : err.response.data, isLoading : false})
        );
    }

    render() {
        const { errors } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h1> Join the game! </h1>
                <TextFieldGroup
                    error={errors.name}
                    label="First and Last name"
                    onChange={this.onChange}
                    value={this.state.name}
                    field="name"
                />
                <TextFieldGroup
                    error={errors.email}
                    label="E-mail"
                    onChange={this.onChange}
                    value={this.state.email}
                    field="email"
                />
                <TextFieldGroup
                    error={errors.password}
                    label="Password"
                    onChange={this.onChange}
                    value={this.state.password}
                    field="password"
                />
                <TextFieldGroup
                    error={errors.passwordConfirmation}
                    label="Confirm your password"
                    onChange={this.onChange}
                    value={this.state.passwordConfirmation}
                    field="passwordConfirmation"
                />

            <div className="form-group text-center">
                    <button disabled={this.state.isLoading} className="btn btn-primary">
                        Sign up
                    </button>
                </div>
            </form>
        );
    }
}


export default SignupForm;
