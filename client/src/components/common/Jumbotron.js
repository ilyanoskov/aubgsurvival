import React, {PropTypes} from 'react';
import {Link, IndexLink, browserHistory} from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import { Jumbotron } from 'react-bootstrap';
import Rules from '../common/Rules';
import './jumb.css'
class Jumbotrons extends React.Component {
    logout(e) {
        e.preventDefault();
        this.props.logout();
        browserHistory.push('/');
    }
    render () {
        const { isAuthenticated } = this.props.auth;

        const userLinks = (
            <div className="col-lg-12">
                <div className="col-lg-1 col-lg-offset-5">
                    <Link to="/kill">
                    <a className="btn btn-danger" href="#"> Kill</a>
                    </Link>
                </div>
                <div className="col-lg-1">
                        <a className="btn btn-default" href="#" onClick={this.logout.bind(this)}> Log Out</a>
                </div>

            </div>

        );

        const guestLinks = (
            <div className="col-lg-12">
                <div className="col-lg-1 col-lg-offset-5">
                    <Link to="/login">
                    <a className="btn btn-default" href="#"> Login</a>
                    </Link>
                </div>
                <div className="col-lg-1">
                    <Link to="/register">
                        <a className="btn btn-default" href="#"> Register</a>
                        </Link>
                </div>
            </div>

        );
        return (
            <div>
                <Jumbotron>
                    <Rules />
                    <h3 style={{textAlign:'center'}}> Come here. Die anywhere. </h3>
                    <h1 style={{textAlign:'center'}}> AUBG Survival </h1>
                        <h3>&#8192;</h3>
                        { isAuthenticated ? userLinks : guestLinks }
                        <h5>&#8192;</h5>
                </Jumbotron>
            </div>
        );
    }
};

Jumbotrons.propTypes = {
    auth : React.PropTypes.object.isRequired,
    logout : React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps, { logout } )(Jumbotrons);

class Greeting extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <Rules />
                    <h3 style={{textAlign:'center'}}> Come here. Die anywhere. </h3>
                    <h1 style={{textAlign:'center'}}> AUBG Survival </h1>
                    <h1> </h1>
                        <ButtonsGuest />
                </Jumbotron>
            </div>
        );
    }
}


class ButtonsGuest extends React.Component {
    render() {
        return (
            <div className="col-lg-12">
                <div className="col-lg-1 col-lg-offset-5">
                    <a className="btn btn-default" href="#"> Login</a>
                </div>
                <div className="col-lg-1">
                        <a className="btn btn-default" href="#"> Register</a>
                </div>

            </div>

        );
    }
}

class ButtonsUser extends React.Component {
    render() {
        return (
            <div className="col-lg-12">
                <div className="col-lg-1 col-lg-offset-5">
                    <a className="btn btn-danger" href="#"> Kill</a>
                </div>
                <div className="col-lg-1">
                        <a className="btn btn-default" href="#"> Log Out</a>
                </div>

            </div>
        )
    }
}
