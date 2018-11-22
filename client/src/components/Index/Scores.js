import React from 'react';
import * as actions from '../../actions/players';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Scores extends React.Component {
  componentWillMount() {
    this.props.actions.getPlayers();
  }

  render() {
    let players = shuffle(this.props.players);
    //sort in descending order :
    players.sort((a, b) =>
      a.kills < b.kills ? 1 : b.kills < a.kills ? -1 : 0
    );
    return <div>{printWithLine(players)}</div>;
  }
}

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

//just a nice little function here
function printWithLine(scores) {
  if (scores.length < 10) {
    let result = [];
    for (let i = 0; i < scores.length - 1; i++) {
      let score = scores[i];
      result.push(
        <Score
          key={score.id}
          data={{
            name: score.name,
            kills: score.kills,
            isKilled: score.isKilled,
            line: true
          }}
        />
      );
    }
    let score = scores[scores.length - 1];
    result.push(
      <Score
        key={score.id}
        data={{
          name: score.name,
          kills: score.kills,
          isKilled: score.isKilled,
          line: false
        }}
      />
    );
    return result;
  } else {
    let result = [];
    for (let i = 0; i < 10; i++) {
      let score = scores[i];
      result.push(
        <Score
          key={score.id}
          data={{
            name: score.name,
            kills: score.kills,
            isKilled: score.isKilled,
            line: true
          }}
        />
      );
    }
    let score = scores[10];
    result.push(
      <Score
        key={score.id}
        data={{
          name: score.name,
          kills: score.kills,
          isKilled: score.isKilled,
          line: false
        }}
      />
    );
    return result;
  }
}

//Score component with conditional line rendering
const Score = props => {
  let data = props.data;
  let l = data.line ? <hr /> : <div />;
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-lg-7 col-xs-7">
          {data.isKilled ? (
            <p className="text-danger">{data.name}</p>
          ) : (
            <p className="text-success">{data.name}</p>
          )}
        </div>
        <div className="badge" style={{ height: '25px', lineHeight: '20px' }}>
          {data.kills} kills
        </div>
        {l}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { players: state.players };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scores);
