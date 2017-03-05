import React from 'react';
import SignupForm from "./SignupForm.js"
import {connect} from 'react-redux';
import {userSignupRequest} from '../../actions/signupActions.js';
import {addFlashMessage} from '../../actions/flashMessages.js'

class Registration extends React.Component {
    render() {
        const { userSignupRequest, addFlashMessage } = this.props;
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage} />
                </div>
            </div>
        );
    }
}

Registration.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired
}


export default connect(null, {userSignupRequest, addFlashMessage}) (Registration);
