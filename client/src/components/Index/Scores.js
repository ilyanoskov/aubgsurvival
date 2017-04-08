import React from 'react';
import * as actions from '../../actions/players';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Scores extends React.Component {
    componentWillMount() {
        this.props.actions.getAlivePlayers();
    }


    render() {
    //In this component we display ONLY alive users
    //sort in descending order :
    this.props.players.sort((a,b) => (a.kills < b.kills) ? 1 : ((b.kills < a.kills) ? -1 : 0))
        return (
            <div>
                {
                    /*Render only 10 elements:*/

                    this.props.players.map(player => {
                    if (player.isKilled === false)
                    return (
                        <div className="panel panel-body panel-info" key={player.id}>
                            <span> {player.name} : {player.kills} </span>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {players : state.players}
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scores);
