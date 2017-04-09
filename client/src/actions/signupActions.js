import axios from 'axios';


export function userSignupRequest(userData) {
    return dispatch => {
        return axios.post('http://10.253.95.1:3001/api/users/register', userData);
    }
}
