import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post(
      `${process.env.REACT_APP_SERVER}/api/users/register`,
      userData
    );
  };
}
