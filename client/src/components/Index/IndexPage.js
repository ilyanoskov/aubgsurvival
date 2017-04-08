import React, {PropTypes} from 'react';
import NavigationBar from '../common/Header';
import Rules from '../common/Rules';
import Jumbotrons from '../common/Jumbotron';
import Columns from './Columns';

class Index extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Jumbotrons/>
                    <Columns />
                </div>
            </div>
        );
    }
}

class Event extends React.Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="well">
                    Ilya killed You
                </div>
            </div>
        );
    }
}




export default Index;
