import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/getEvents';
import shortid from 'shortid';

//TODO : make the function "more" random
const getRandomEmoji = () => {
    let emojis = [
        '⚡',
        '🔪',
        '🔫',
        '💣',
        '🔨',
        '❌',
        '💩',
        '😵',
        '🆘',
        '💥',
        '✂',
        '💢',
        '⛔',
        '🚷',
        '💀',
        '☠️',
        '🌵',
        '⚰️',
        '🤺',
        '👊🏻',
        '🦅',
        '🐉',
        '🔥',
        '☄️',
        '🍌',
        '🏹',
        '🥊',
        '🤼‍',
        '⚓️',
        '🛠',
        '⛏',
        '🗡',
        '💊'
    ];
    return <h2>{emojis[Math.floor(Math.random() * emojis.length)]}</h2>
}

class Murder extends React.Component {
    componentWillMount() {
        this.props.actions.getEvents();
    }

    render() {
        //TODO: REWRITE IN A FOR LOOP TO PRINT ONLY 10 recent events!
        return (
            <div>
                {this.props.events.map(event => {
                    return (
                        <div key={shortid.generate()}>
                            <table style={{
                                width: "100%",
                                textAlign: "center"
                            }}>
                                <tbody>
                                    <tr >
                                        <td>{event.killer}</td>
                                        <td>
                                            {getRandomEmoji()}
                                        </td>
                                        <td>{event.victim}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr/>
                        </div>
                    );
                })}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {events: state.events};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Murder);
