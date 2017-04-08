import React from 'react';
import Stats from './Stats';
import Players from './Players';
import {browserHistory} from 'react-router';

class PlayersColumn extends React.Component {

    handleClick(e) {
        e.preventDefault();
        browserHistory.push('/players');
    }

    render() {
        return (
            <div className="col-lg-3 col-lg-offset-1 col-md-3 col-md-offset-1 col-sm-3 col-sm-offset-1">
            {/* one dummy panel to create spacing, a lá quick'n'dirty */}
            <div className="panel panel-body hidden-xs" style={{background : 343434}}></div>

            <div className="panel panel-default">
                <div className="panel-heading">
                    <h2 style={{textAlign:"center"}}>🦄 Players</h2>
                </div>
                <div className="panel-body">
                    <Stats />
                    <Players />
                </div>

                <div className="panel-footer" onClick={this.handleClick}>
                    <div className="text-center">
                        <small>
                            show more
                        </small>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default PlayersColumn;
