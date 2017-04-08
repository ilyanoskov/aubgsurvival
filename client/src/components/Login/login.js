import React from 'react';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-10 col-xs-offset-1">
                    <LoginForm />
                </div>
            </div>
        );
    }
}

export default LoginPage;
