import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/getStats';

class Stats extends React.Component {
    componentWillMount() {
        this.props.actions.getStats();
    }

    render() {
        return (
            <div>
                <div style={{"fontSize":"55%"}} id="hover-me" className="well-sm">
                     <text id="hover-content">found a bug? experiencing problems? <br /> contact ian140@aubg.edu
                     </text>
                 </div>
                 <div style={{"fontSize":"75%"}}  className="visible-xs">
                      <text>found a bug? experiencing problems? <br /> contact ian140@aubg.edu
                      </text>
                  </div>
                  <div className="panel panel-body panel-default">
                      <h3>Statistics</h3>
                             <hr />
                             <h5> {this.props.stats.dead} DEAD </h5>
                             <h5>  {this.props.stats.alive} ALIVE </h5>
                  </div>

                </div>
        );
    }

}

function mapStateToProps(state) {
    return {stats: state.stats};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
