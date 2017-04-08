import React from 'react';

class Stats extends React.Component {
    render() {
        return (
            <div className="well">
                <table style={{
                    width: "100%",
                    textAlign: "center"
                }}>
                    <tr>
                        <td>Dead</td>
                        <td>10</td>
                        <td><large>😵</large> Today</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Alive</td>
                        <td>100</td>

                        <td><large>😵</large> Yesterday</td>
                        <td>100</td>
                    </tr>
                </table>
            </div>
        )
    }

}

export default Stats;
