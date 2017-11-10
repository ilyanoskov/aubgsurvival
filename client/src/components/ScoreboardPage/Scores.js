import React from 'react';
import * as actions from '../../actions/players';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class Scores extends React.Component {
  componentWillMount() {
    this.props.actions.getPlayers();
  }

  render() {
    console.log(this.props);
    let players = shuffle(this.props.players);
    //sort in descending order :
    players.sort(
      (a, b) => (a.kills < b.kills ? 1 : b.kills < a.kills ? -1 : 0)
    );
    let players1 = players.slice(0, -1);
    return (
      <div className="container text-center well col-lg-6 col-lg-offset-3">
        <div className="row ">
          <div className=" panel-heading">
            <h1> Scoreboard 🏆</h1>
          </div>
          <div className="panel panel-default panel-body col-lg-8 col-lg-offset-2">
            <div>
              {players1.map(player => {
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
                        {players.slice(-1)[0].isKilled ? (
                          <p className="text-danger">
                            {players.slice(-1)[0].name}
                          </p>
                        ) : (
                          <p className="text-success">
                            {players.slice(-1)[0].name}
                          </p>
                        )}
                      </div>
                      <div className="badge">
                        {players.slice(-1)[0].kills} kills
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

/*

//sort in descending order :
players.sort((a, b) => (a.kills < b.kills)
    ? 1
    : ((b.kills < a.kills)
        ? -1
        : 0));
let players = players.slice(0, -1);
return (
    <div>
        {players.map(player => {
            return (
                <div className="container-fluid" key={player.id}>
                    <div className="row">
                        <div className="col-lg-7 col-xs-7">
                            {player.isKilled
                                ? <p className="text-danger">
                                        {player.name}
                                    </p>
                                : <p className="text-success">
                                    {player.name}
                                </p>
                            }
                        </div>
                        <div className="badge">
                            {player.kills} kills
                        </div>
                        <hr/>
                    </div>
                </div>
            )
        })
    }
    <div>
    {
        <div className="container-fluid" key={players.slice(-1)[0].id}>
            <div className="row">
                <div className="col-lg-7 col-xs-7">
                    {players.slice(-1)[0].isKilled
                        ? <p className="text-danger">
                                {players.slice(-1)[0].name}
                            </p>
                        : <p className="text-success">
                            {players.slice(-1)[0].name}
                        </p>
                    }
                </div>
                <div className="badge">
                    {players.slice(-1)[0].kills} kills
                </div>
            </div>
        </div>
    }
    </div>
    </div>
);



*/

function mapStateToProps(state) {
  return { players: state.players };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Scores);
