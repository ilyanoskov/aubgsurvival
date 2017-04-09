import React from 'react';

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
    render() {
        return (
                <div className="">
                    <table style={{
                    width: "100%",
                    textAlign: "center"
                }}>
                        <tbody>
                            <tr>

                                <td>Ilya Noskov</td>
                                <td>   {getRandomEmoji()}   </td>
                                <td>Your Mom</td>
                            </tr>
                        </tbody>
                  </table>

                </div>
        )
    }
}

export default Murder;
