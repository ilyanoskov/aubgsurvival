import {REQUEST_DATA, RECEIVE_DATA} from '../actions/types';
import _ from 'lodash';

const initialState = [];

const personal = (state = initialState, action = {}) => {
    switch (action.type) {
        case REQUEST_DATA:
            return state;
        case RECEIVE_DATA:
            if (!_.isEmpty(action.personal)) {
                return action.personal;
            } else
                return state;
        default:
            return state;
    }
};

export default personal;
