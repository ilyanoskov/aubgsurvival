import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/getEvents';

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
        let events = this.props.events;
        return (
            <div>
                {printWithLine(events)}
            </div>
        )
    }
}

//just a nice little function here
function printWithLine(events) {
    let result = [];
        for (let i = 0; i < events.length-1; i++) {
            let event = events[i];
            result.push( <Event key={event._id} data={{killer : event.killer, victim : event.victim, line: true}} />);
        }
        let event = events[events.length-1];
        console.log(event);
        result.push(<Event key={event._id} data={{killer : event.killer, victim : event.victim, line: false}} />);
        return result;
}

//Event component that allows flexibility with <hr/> component
const Event = (props) => {
    let l = props.data.line ? <hr/> : <div></div>;
    let killer = props.data.killer;
    let victim = props.data.victim;

    return (
        <div className="text-center">
            <table style={{
                width: "100%",
                textAlign: "center",
                tableLayout:"fixed"
            }}>
                <tbody>
                    <tr >
                        <td>{killer}</td>
                        <td>
                            {getRandomEmoji()}
                        </td>
                        <td>{victim}</td>
                    </tr>
                </tbody>
                </table>
                {l}
        </div>
    )
};


function mapStateToProps(state) {
    return {events: state.events};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Murder);
