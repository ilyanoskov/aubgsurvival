import axios from 'axios';

export function kill(id) {
    return dispatch => {
        return axios.post('http://localhost:3001/api/kill', id);
    };
}
