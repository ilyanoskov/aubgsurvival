import axios from 'axios';


export function userSignupRequest(userData) {
    return dispatch => {
        return axios.post('https://aubgsurvival2.herokuapp.com/api/users/register', userData);
    }
}
