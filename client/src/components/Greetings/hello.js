import React, {PropTypes} from 'react';
import NavigationBar from '../common/Header';
import Rules from '../common/Rules';
import {Jumbotron} from 'react-bootstrap';
import Jumbotrons from '../common/Jumbotron';

class Greetings extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                <Jumbotrons />
                <Stuff />
                </div>
            </div>
        );
    }
}



class Event extends React.Component {
    render() {
        return (
            <div className="well">
                Ilya killed You
            </div>
        );
    }
}


class Stuff extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-lg-offset-1">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                Scoreboard
                            </div>
                            <div className="panel-body">
<Event />
<Event />
<Event />
<Event />
<Event />
<Event />
<Event />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                Recent Events
                            </div>
                            <div className="panel-body">
<Event />
<Event />
<Event />
<Event />
<Event />
<Event />
<Event />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                Players
                            </div>
                            <div className="panel-body">
<Event />
<Event />
<Event />
<Event />
<Event />
<Event />
<Event />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        );
    }
}

export default Greetings;
