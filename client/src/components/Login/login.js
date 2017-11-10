import React from 'react';
import LoginForm from './LoginForm';
import Header from '../common/Header';

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="well well-lg col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
