import React from 'react';
import Stats from './Stats';
import PlayerData from './PlayerData';
import {browserHistory} from 'react-router';

class PlayersColumn extends React.Component {


    render() {
        return (
            <div className="col-lg-3 col-lg-offset-1 col-md-3 col-md-offset-1 col-sm-3 col-sm-offset-1 custom-column">
            <div className=" player-panel">
                <div className="panel-heading panel-default">
                    <h2 style={{textAlign:"center"}}>🎲</h2>
                </div>
                <div className="panel panel-body text-center player-panel ">
                    <PlayerData />
                    <Stats />
                </div>

                    </div>
                </div>
        )
    }
}

export default PlayersColumn;
