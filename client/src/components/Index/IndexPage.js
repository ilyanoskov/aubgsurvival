import React, {PropTypes} from 'react';
import NavigationBar from '../common/Header';
import Rules from '../common/Rules';
import Jumbotrons from '../common/Jumbotron';
import Columns from './Columns';
import './events.css';


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



export default Index;
