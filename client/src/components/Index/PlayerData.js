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
                        <hr />
                    </div>
                    <div className="col-lg-12">
                        <Link to="/login"><button className="btn btn-default col-lg-5 col-lg-offset-1 col-xs-5 col-xs-offset-1">Log In</button></Link>
                        <Link to="/register"><button className="btn btn-info">Participate</button></Link>
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

    render() {
        {/*
            I have included the Player info here because I could not figure out how to correctly pass logout function
            I will change it whenever I get better knowledge of Javascript, this works so far though
            */}

        const Player = () => {
            return (
                <div className="panel panel-default panel-body container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Ilya Noskov
                                <small className="badge">2 kills</small>
                            </h3>
                            <hr/>
                        </div>
                        <div className="col-lg-12">
                            <div id="hover-me" className="well well-sm hidden-xs">
                                <small>
                                    Your Code
                                </small>
                                <div id="hover-content">
                                    #123456
                                </div>
                            </div>
                            <div id="hover-me" className="well well-sm hidden-xs">
                                <small>
                                    Your Victim
                                </small>
                                <div id="hover-content">
                                    SEND NUDES
                                </div>
                            </div>

                            {/* Render only for mobile phones: */}

                            <div className="well well-sm hidden-lg hidden-sm hidden-md">
                                <small>
                                    Your Code :
                                </small>
                                <div>
                                    #123456
                                </div>
                            </div>
                            <div className="well well-sm hidden-lg hidden-sm hidden-md">
                                <small>
                                    Your Victim :
                                </small>
                                <div>
                                    SEND NUDES
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <Link to="/kill"><button className="btn btn-danger col-lg-5 col-lg-offset-1 col-xs-5 col-xs-offset-1" >Kill</button></Link>
                                <button className="btn btn-default" onClick={this.logout.bind(this)} >Log Out</button>
                            </div>
                            <div className="col-lg-12">
                                <hr/>
                                <button className="btn btn-default btn-block">Suicide</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        const {isAuthenticated} = this.props.auth;
        //MAIN RENDER FUNCTION GOES HERE
        //CONIDITIONAL RENDERING
        return (
            <div>
                {isAuthenticated ? <Player /> : <Guest />}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {auth: state.auth};
}


//connect to state
export default connect(mapStateToProps, {logout})(PlayerData);
