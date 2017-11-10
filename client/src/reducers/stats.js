import { REQUEST_STATS, RECEIVE_STATS } from '../actions/types';
import _ from 'lodash';

const initialState = {
  dead: 0,
  alive: 0
};

const stats = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_STATS:
      return state;
    case RECEIVE_STATS:
      if (!_.isEmpty(action.stats)) {
        return action.stats;
      } else return state;
    default:
      return state;
  }
};

export default stats;
