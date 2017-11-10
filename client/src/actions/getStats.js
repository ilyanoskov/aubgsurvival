import axios from 'axios';
import { REQUEST_STATS, RECEIVE_STATS } from '../actions/types';

export function request(stats) {
  return { type: REQUEST_STATS, stats };
}

export function receive(stats) {
  return { type: RECEIVE_STATS, stats };
}

export function getStats(stats) {
  return function(dispatch) {
    dispatch(request(stats));
    return axios
      .get(`${process.env.REACT_APP_SERVER}/api/stats`)
      .then(res => dispatch(receive(res.data)));
  };
}
