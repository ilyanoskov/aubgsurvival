import React from 'react';
import Murder from './Murder';
import {hashHistory} from 'react-router';


class EventsColumn extends React.Component {
    handleClick(e) {
        e.preventDefault();
        hashHistory.push('/events');
    }

    render() {
        return (
            <div className="col-lg-4 col-md-4 col-sm-4 panel panel-body player-panel">
                    <div className="panel-heading panel-default player-panel">
                        <h2 style={{textAlign:"center"}}>📰 Events</h2>
                    </div>
                    <div className="panel-default panel-body panel">
                        <Murder />
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

        )
    }
}

export default EventsColumn;
