import React from 'react';
import ScoreboardColumn from './ScoreboardColumn';
import EventsColumn from './EventsColumn';
import PlayersColumn from './PlayersColumn';

class Columns extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <PlayersColumn/>
                <EventsColumn/>
                <ScoreboardColumn/>
            </div>
        )
    }
}

export default Columns;
