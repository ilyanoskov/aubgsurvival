import React from 'react';
import {connect} from 'react-redux';

class PlayerData extends React.Component {
    render() {
        return (
            <div className="panel panel-default panel-body container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <h3>Ilya Noskov <small className="badge">2 kills</small> </h3>
                    <hr />
                </div>
                <div className="col-lg-12">
                    <div id="hover-me" className="well well-sm hidden-xs">
                        <small> Your Code </small>
                        <div id="hover-content">
                            #123456
                        </div>
                    </div>
                    <div id="hover-me" className="well well-sm hidden-xs">
                        <small> Your Victim </small>
                        <div id="hover-content">
                            SEND NUDES
                        </div>
                    </div>

                    {/* Render only for mobile phones: */}

                    <div className="well well-sm hidden-lg hidden-sm hidden-md">
                        <small> Your Code : </small>
                        <div>
                            #123456
                        </div>
                    </div>
                    <div className="well well-sm hidden-lg hidden-sm hidden-md">
                        <small> Your Victim :  </small>
                        <div>
                            SEND NUDES
                        </div>
                    </div>

                <div className="col-lg-12">
                    <button className="btn btn-danger col-lg-5 col-lg-offset-1 col-xs-5 col-xs-offset-1">Kill</button>
                    <button className="btn btn-default">Log Out</button>
                </div>
                <div className="col-lg-12">
                    <hr />
                    <button className="btn btn-default btn-block">Suicide</button>
                </div>
            </div>
            </div>
        </div> )
    }

}

function mapStateToProps(state) {
    return {players: state.players}
}

//connect to state
export default connect(mapStateToProps)(PlayerData);
