import {REQUEST_DATA, RECEIVE_DATA} from '../actions/types';
import _ from 'lodash';

const initialState = {
    name : "Loading...",
    kills : 0,
    isKilled : false,
    email : "Loading...",
    victimName : "Loading...",
    code : "Loading...",
    id : "123"
};

const personal = (state = initialState, action = {}) => {
    switch (action.type) {
        case REQUEST_DATA:
            return state;
        case RECEIVE_DATA:
            return action.data;
        default:
            return state;
    }
};

export default personal;
