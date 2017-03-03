import React from 'react';
import SignupForm from "./SignupForm.js"
import {connect} from 'react-redux';
import {userSignupRequest} from '../../actions/signupActions.js';

class Registration extends React.Component {
    render() {
        const { userSignupRequest } = this.props;
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignupForm userSignupRequest={userSignupRequest} />
                </div>
            </div>
        );
    }
}

Registration.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}


export default connect(null, {userSignupRequest}) (Registration);
