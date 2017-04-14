import axios from 'axios';

export function kill(code) {
    return dispatch => {
        return axios.post('http://localhost:3001/api/kill', code);
    };
}
