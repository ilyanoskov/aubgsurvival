import React from 'react';
import Murder from './Murder';
import { hashHistory } from 'react-router';

class EventsColumn extends React.Component {
  handleClick(e) {
    e.preventDefault();
    hashHistory.push('/events');
  }

  render() {
    return (
      <div className="col-lg-4 col-md-4 col-sm-4 panel panel-body player-panel">
        <div className="panel-heading panel-default player-panel">
          <h2 style={{ textAlign: 'center' }}>📰 Events</h2>
        </div>
        <div className="text-center panel panel-body panel-default">
          <h3>AUBG Survival Has Started </h3>
          <h4> Let the hunt begin! </h4>
        </div>
        <div className="panel-default panel panel-body">
          <Murder />
        </div>
      </div>
    );
  }
}

export default EventsColumn;
