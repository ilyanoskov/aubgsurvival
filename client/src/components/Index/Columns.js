import React from 'react';
import Scoreboard from './Scoreboard';
import Events from './Events';
import Players from './Players';


class Columns extends React.Component {
    render() {
        return (
            <div>
                    <Scoreboard />
                    <Events />
                    <Players />
            </div>
        )
    }
}

export default Columns;
