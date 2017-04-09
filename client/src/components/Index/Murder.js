import React from 'react';

//TODO : make the function "more" random
const getRandomEmoji = () => {
    let emojis = ['⚡', '🔪', '🔫', '💣', '🔨', '❌', '💩','😵','🆘','💥','✂','💢', '⛔','🚷','💀', '☠️','🌵','⚰️', '🤺', '👊🏻','🦅','🐉', '🔥','☄️','🍌','🏹','🥊','🤼‍','⚓️','🛠','⛏','🗡','💊'];
    return emojis[Math.floor(Math.random()*emojis.length)];
}

class Murder extends React.Component {
    render() {
        return(
            <div className="panel panel-body panel-default murder-panel">
                <table style={{
                    width: "100%",
                    textAlign: "center"
                }}>
                    <tr>
                        <td>Ilya Noskov</td>
                        <td><h2>{getRandomEmoji()}</h2></td>
                        <td>Your Mom</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Murder;
