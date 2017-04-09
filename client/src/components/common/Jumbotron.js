import React, {PropTypes} from 'react';
import {Link, IndexLink, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {logout} from '../../actions/authActions';
import {Jumbotron} from 'react-bootstrap';
import Rules from '../common/Rules';
import './jumb.css'
import logo from './logo-big.png';
import logo2 from './logo-comehere.png';

class Jumbotrons extends React.Component {
    logout(e) {
        e.preventDefault();
        this.props.logout();
        browserHistory.push('/');
    }

    kill(e) {
        e.preventDefault();
        browserHistory.push('/kill');
    }
    render() {
        const {isAuthenticated} = this.props.auth;

        const userLinks = (
            <div className="col-lg-12">
                <div className="col-lg-1 col-lg-offset-5 col-md-1 col-md-offset-4 col-sm-1 col-sm-offset-4 col-xs-1 col-xs-offset-2">
                    <button className="btn btn-danger" onClick={this.kill.bind(this)}>🔪 Kill ☠️ </button>
                </div>
                <div className="col-lg-0 col-xs-offset-6">
                    <button className="btn btn-default" onClick={this.logout.bind(this)}>
                        Log Out</button>
                </div>

            </div>

        );

        const guestLinks = (
            <div className="col-lg-12">
                <div className="col-lg-1 col-lg-offset-5 col-md-1 col-md-offset-5 col-sm-1 col-sm-offset-5 col-xs-1 col-xs-offset-2 ">
                    <Link to="/login">
                        <button className="btn btn-default">
                            Login</button>
                    </Link>
                </div>
                <div className="col-lg-1 col-md-1 col-md-offset-0 col-sm-1 col-sm-offset-0 col-xs-1 col-xs-offset-3">
                    <Link to="/register">
                        <button className="btn btn-default register">
                            Register</button>
                    </Link>
                </div>
            </div>

        );
        return (
            <div>
                <Jumbotron>
                    <div className="text-center">
                    <img src={logo2} className="hidden-xs" />
                    <h4 className="visible-xs">Come here. Die Anywhere.</h4>
                    </div>
                    <h5>&#8192;</h5>
                    <div className="text-center">
                    <img src={logo} className="hidden-xs"/>
                    <h1 className="visible-xs">AUBG Survival</h1>
                    </div>
                    <h2>&#8192;</h2>
                    <div className="text-center">
                    <button className="btn btn-default"> Rules</button>
                    </div>
            {/*isAuthenticated
                        ? userLinks
                        : guestLinks */}
                </Jumbotron>
            </div>
        );
    }
};

Jumbotrons.propTypes = {
    auth: React.PropTypes.object.isRequired,
    logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {auth: state.auth};
}

export default connect(mapStateToProps, {logout})(Jumbotrons);
