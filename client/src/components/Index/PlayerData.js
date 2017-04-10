import React from 'react';
import {connect} from 'react-redux';
import {Link, IndexLink, browserHistory} from 'react-router';
import {logout} from '../../actions/authActions';

class Guest extends React.Component {
    render() {
        return (
            <div className="panel panel-default panel-body container-fluid">

                <div className="row">
                    <div className="col-lg-12">
                        <h3>Are you ready?</h3>
                        <hr/>
                    </div>
                    <div className="col-lg-12">
                        <Link to="/login">
                            <button className="btn btn-default col-lg-5 col-lg-offset-1 col-xs-5 col-xs-offset-1">Log In</button>
                        </Link>
                        <Link to="/register">
                            <button className="btn btn-info">Participate</button>
                        </Link>
                    </div>
                </div>
            </div>

        );
    }

}

class PlayerData extends React.Component {

    logout(e) {
        e.preventDefault();
        this.props.logout();
        browserHistory.push('/');
    }

    kill(e) {
        e.preventDefault();
        browserHistory.push('/kill');
    }


    //add suicide functionality here
    suicide(e) {
        e.preventDefault();
        browserHistory.push('/');
    }

    render() {
        {/*
            I have included the Player info here because I could not figure out how to correctly pass logout function
            I will change it whenever I get better knowledge of Javascript, this works good so far though
            */
        }

        const Player = () => {

            const Dead = () => {
                return (
                    <div className="panel panel-default panel-body container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>{this.props.auth.user.name}
                                    <small className="badge">{this.props.auth.user.kills}
                                        kills</small>
                                </h3>
                                <hr/>
                            </div>
                            <div className="col-lg-12">
                                <h2>You are dead :(
                                </h2>
                            </div>
                        </div>
                    </div>
                );

            }

            const Alive = () => {
                return (
                    <div className="panel panel-default panel-body container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>{this.props.auth.user.name}
                                    <small className="badge">{this.props.auth.user.kills} kills</small>
                                </h3>
                                <hr/>
                            </div>
                            <div className="col-lg-12">
                                <div id="hover-me" className="well well-sm hidden-xs">
                                    <small>
                                        Your Code
                                    </small>
                                    <div id="hover-content">
                                        {this.props.auth.user.code}
                                    </div>
                                </div>
                                <div id="hover-me" className="well well-sm hidden-xs">
                                    <small>
                                        Your Victim
                                    </small>
                                    <div id="hover-content">
                                        {this.props.auth.user.victim}
                                    </div>
                                </div>

                                {/* Render only for mobile phones: */}

                                <div className="well well-sm hidden-lg hidden-sm hidden-md">
                                    <small>
                                        Your Code :
                                    </small>
                                    <div>
                                        {this.props.auth.user.code}
                                    </div>
                                </div>
                                <div className="well well-sm hidden-lg hidden-sm hidden-md">
                                    <small>
                                        Your Victim :
                                    </small>
                                    <div>
                                        {this.props.auth.user.victim}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <Link to="/kill">
                                        <button className="btn btn-danger col-lg-5 col-lg-offset-1 col-xs-5 col-xs-offset-1">Kill</button>
                                    </Link>
                                    <button className="btn btn-default" onClick={this.logout.bind(this)}>Log Out</button>
                                </div>
                                <div className="col-lg-12">
                                    <hr/>
                                    <button className="btn btn-default btn-block" onClick={this.suicide.bind(this)}>Suicide</button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
            return (this.props.auth.user.isKilled
                ? <Dead/>
                : <Alive/>);
        }
        const {isAuthenticated} = this.props.auth;
        //MAIN RENDER FUNCTION GOES HERE
        //CONIDITIONAL RENDERING
        return (
            <div>
                {isAuthenticated
                    ? <Player/>
                    : <Guest/>
                }
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {auth: state.auth};
}

//connect to state
export default connect(mapStateToProps, {logout})(PlayerData);
