import React from 'react';

class Scoreboard extends React.Component {
    render() {
        return (
            <div className="col-lg-3 col-lg-offset-1 col-md-3 col-md-offset-1 col-sm-3 col-sm-offset-1">
            <div className="panel panel-body hidden-xs" style={{background : 343434}}></div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    Scoreboard
                </div>
                <div className="panel-body">
                    <div className="panel panel-default panel-body">
                        Hello
                    </div>
                    <div className="panel panel-default panel-body">
                        Hello
                    </div>
                    <div className="panel panel-default panel-body">
                        Hello
                    </div>
                    <div className="panel panel-default panel-body">
                        Hello
                    </div>
                    <div className="panel panel-default panel-body">
                        Hello
                    </div>
                    <div className="panel panel-default panel-body">
                        Hello
                    </div>
                </div>

            </div>
            </div>
        )
    }
}

export default Scoreboard;
