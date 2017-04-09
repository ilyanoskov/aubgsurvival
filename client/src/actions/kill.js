import axios from 'axios';

export function kill(id) {
    return dispatch => {
        return axios.post('http://10.253.95.1:3001/api/kill', id);
    };
}
