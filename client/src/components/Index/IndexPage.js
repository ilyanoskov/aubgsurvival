import React from 'react';
import Jumbotrons from '../common/Jumbotron';
import Columns from './Columns';
import './events.css';


class Index extends React.Component {
    render() {
        return (
            <div className="container-fluid b">
                <div className="row">
                    <Jumbotrons/>
                    <Columns />
                </div>
            </div>
        );
    }
}



export default Index;
