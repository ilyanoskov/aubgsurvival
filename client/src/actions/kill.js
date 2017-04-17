import axios from 'axios';

export function kill(code) {
    return dispatch => {
        return axios.post('https://aubgsurvival2.herokuapp.com/api/kill', code);
    };
}
