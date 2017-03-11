import React from 'react';
import { Link } from 'react-router';

class Rules extends React.Component {
    render() {
        return (
            <div className="col-lg-1 col-lg-offset-11">
                <Link to="/about">
                    <div className="btn btn-primary">Rules</div>
                </Link>
            </div>
        )
    }
}

export default Rules;
