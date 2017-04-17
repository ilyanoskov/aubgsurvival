import axios from 'axios';
import {REQUEST_DATA, RECEIVE_DATA} from '../actions/types';

export function request_personal(data) {
    return {type: REQUEST_DATA, data }
}

export function receive_personal(data) {
    return {type: RECEIVE_DATA, data }
}

export function getPersonalData(data) {
    return function(dispatch) {
        dispatch(request_personal(data));
        return axios.get(`${process.env.REACT_APP_SERVER}/api/users/personal`).then(
            res => dispatch(receive_personal(res.data)))
    }
};
