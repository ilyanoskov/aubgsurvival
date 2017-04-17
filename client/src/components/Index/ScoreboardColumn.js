import React from 'react';
import Scores from './Scores'
import {hashHistory} from 'react-router';
class ScoreboardColumn extends React.Component {
    handleClick(e) {
        e.preventDefault();
        hashHistory.push('/scoreboard');
    }

    render() {
        return (
            <div className="col-lg-3 col-md-3 col-sm-3 custom-column">
                <div className="player-panel panel-body">
                    <div className="panel-heading panel-default">
                        <h2 style={{
                            textAlign: "center"
                        }}>🏆 Scoreboard</h2>
                    </div>
                    <div className="panel panel-body panel-default text-center">
                        {/*ALL PLAYERS STUFF GOES HERE*/}
                        <Scores/>
                    </div>
                    {/*
                        <div className="panel-footer" onClick={this.handleClick}>
                            <div className="text-center">
                                <small>
                                    show more
                                </small>
                            </div>
                        </div>
                        */}


                </div>
            </div>
        )
    }
}

export default ScoreboardColumn;
