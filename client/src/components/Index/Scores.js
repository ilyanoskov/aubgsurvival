import React from 'react';
import * as actions from '../../actions/players';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Scores extends React.Component {
    componentWillMount() {
        this.props.actions.getPlayers();
    }

    render() {
        //sort in descending order :
        this.props.players.sort((a, b) => (a.kills < b.kills)
            ? 1
            : ((b.kills < a.kills)
                ? -1
                : 0));
        let players = this.props.players.slice(0, -1);
        return (
            <div>
                {printWithLine(this.props.players)}
            </div>
        )
    }
}


//just a nice little function here
function printWithLine(scores) {
    let result = [];
        for (let i = 0; i < scores.length-1; i++) {
            let score = scores[i];
        result.push(<Score key={score.id} data={{name : score.name, kills : score.kills, isKilled : score.isKilled, line : true}} />);
        }
        let score = scores[scores.length-1];
        result.push(<Score key={score.id} data={{name : score.name, kills : score.kills,  isKilled : score.isKilled, line : false}} />);
        return result;
}
//Score component with conditional line rendering
const Score = (props) => {
    let data = props.data;
    let l = data.line ? <hr/> : <div></div> ;
    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-lg-7 col-xs-7">
                {data.isKilled
                    ? <p className="text-danger">
                            {data.name}
                        </p>
                    : <p className="text-success">
                        {data.name}
                    </p>
                }
            </div>
            <div className="badge">
                {data.kills} kills
            </div>
            {l}
        </div>
    </div>
    );
}


function mapStateToProps(state) {
    return {players: state.players}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scores);
