import React from 'react';
import {connect} from 'react-redux';

class Players extends React.Component {
    render() {
        return(
            <div >
                {

                    this.props.players.map(player => {
                    return (
                        <div className="panel panel-body panel-info" key={player.id}>
                            <span>{player.name}</span>
                        </div>
                    )
                })}
            </div>

        )
    }

}

function mapStateToProps(state) {
    console.log(state);
    return {players : state.players}
}

//connect to state
export default connect(mapStateToProps)(Players);
