import React from 'react';
import { Link } from 'react-router';
import { Jumbotron } from 'react-bootstrap';
import './jumb.css';
import logo from '../../../assets/survival-logo.png';
import logo2 from '../../../assets/survival-slogan.png';
import rules from '../../../assets/button-rules.png';
import FlashMessagesList from '../flash/FlashMessagesList';

class Jumbotrons extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <FlashMessagesList />
          <div className="text-center">
            <img
              src={logo2}
              className="hidden-xs"
              role="presentation"
              style={{ width: '30%', marginBottom: '30px' }}
            />
            <img
              src={logo2}
              className="visible-xs"
              role="presentation"
              style={{ width: '100%', marginBottom: '30px' }}
            />
          </div>
          <div className="text-center">
            <img
              src={logo}
              className="hidden-xs"
              role="presentation"
              style={{ width: '65%', marginBottom: '30px' }}
            />
            <img
              src={logo}
              className="visible-xs"
              role="presentation"
              style={{ width: '100%', marginBottom: '30px' }}
            />
          </div>
          <div className="text-center">
            <Link to="/about">
              <img
                src={rules}
                className="hidden-xs"
                role="presentation"
                style={{ width: '7%' }}
              />
              <div className="col-xs-offset-5">
                <img
                  src={rules}
                  className="visible-xs"
                  role="presentation"
                  style={{ width: '30%' }}
                />
              </div>
            </Link>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Jumbotrons;
