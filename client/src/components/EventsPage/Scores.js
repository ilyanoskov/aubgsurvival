import React from 'react';
import * as actions from '../../actions/players';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Events extends React.Component {
  componentWillMount() {
    this.props.actions.getPlayers();
  }

  render() {
    //sort in descending order :
    this.props.players.sort(
      (a, b) => (a.kills < b.kills ? 1 : b.kills < a.kills ? -1 : 0)
    );
    let players = this.props.players.slice(0, -1);
    return (
      <div className="container text-center">
        <div className="row ">
          <div className="panel panel-default panel-body col-lg-5 col-lg-offset-3">
            <div>
              {players.map(player => {
                return (
                  <div className="container-fluid" key={player.id}>
                    <div className="row">
                      <div className="col-lg-7 col-xs-7">
                        {player.isKilled ? (
                          <p className="text-danger">{player.name}</p>
                        ) : (
                          <p className="text-success">{player.name}</p>
                        )}
                      </div>
                      <div className="badge">{player.kills} kills</div>
                      <hr />
                    </div>
                  </div>
                );
              })}
              <div>
                {
                  <div
                    className="container-fluid"
                    key={players.slice(-1)[0].id}
                  >
                    <div className="row">
                      <div className="col-lg-7 col-xs-7">
                        {this.props.players.slice(-1)[0].isKilled ? (
                          <p className="text-danger">
                            {this.props.players.slice(-1)[0].name}
                          </p>
                        ) : (
                          <p className="text-success">
                            {this.props.players.slice(-1)[0].name}
                          </p>
                        )}
                      </div>
                      <div className="badge">
                        {this.props.players.slice(-1)[0].kills} kills
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { players: state.players };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
