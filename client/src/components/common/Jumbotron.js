import React, {PropTypes} from 'react';
import {Link, IndexLink, browserHistory} from 'react-router';
import {Jumbotron} from 'react-bootstrap';
import './jumb.css'
import logo from './logo-big.png';
import logo2 from './logo-comehere.png';

class Jumbotrons extends React.Component {
    render() {
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
                        <Link to="/about">
                            <button className="btn btn-default"> Rules</button>
                        </Link>
                    </div>
                </Jumbotron>
            </div>
        );
    }
};


export default Jumbotrons;
