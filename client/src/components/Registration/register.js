import React from 'react';
import SignupForm from "./SignupForm.js"
import {connect} from 'react-redux';
import {userSignupRequest} from '../../actions/signupActions.js';
import {addFlashMessage} from '../../actions/flashMessages.js'
import Header from '../common/Header';

class Registration extends React.Component {
    render() {
        const {userSignupRequest, addFlashMessage} = this.props;
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="well well-lg col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
                            <SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default connect(null, {userSignupRequest, addFlashMessage})(Registration);
