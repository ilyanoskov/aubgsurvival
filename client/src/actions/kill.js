import axios from 'axios';

export function kill(code) {
    return dispatch => {
        return axios.post(`${process.env.REACT_APP_SERVER}/api/kill`, code);
    };
}
