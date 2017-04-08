import React, {PropTypes} from 'react';
import {Link, IndexLink, browserHistory} from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

class Header extends React.Component {
    logout(e) {
        e.preventDefault();
        this.props.logout();
        browserHistory.push('/');
    }
    render () {
        const { isAuthenticated } = this.props.auth;

        const userLinks = (
        <div>
            <ul className="nav navbar-nav">
              <li><Link to="/kill">Kill</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#" onClick={this.logout.bind(this)}>Log Out</a></li>
            </ul>
        </div>
        );

        const guestLinks = (
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/register">Sign Up</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
        );
        return (
            <nav className="navbar navbar-static-top navbar-default">
              <div className="container-fluid">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                  <Link to="/" className="navbar-brand" >AUBG Survival</Link>
                </div>
                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                      <li><Link to="/about">Rules</Link></li>
                    </ul>
                    {isAuthenticated ? userLinks : guestLinks}

                </div>{/* /.navbar-collapse */}
              </div>{/* /.container-fluid */}
            </nav>
        );
    }
};

Header.propTypes = {
    auth : React.PropTypes.object.isRequired,
    logout : React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps, { logout } )(Header);
