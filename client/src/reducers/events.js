import {REQUEST_EVENTS, RECEIVE_EVENTS} from '../actions/types';
import _ from 'lodash';

const initialState = [
    {
        "killer": "Ilya Noskov",
        "victim": "AUBG Survival",
        "_id": "123"
    }
];

const events = (state = initialState, action = {}) => {
    switch (action.type) {
        case REQUEST_EVENTS:
            return state;
        case RECEIVE_EVENTS:
            if (!_.isEmpty(action.events)) {
                return action.events;
            } else
                return state;
            default:
            return state;
    }
};

export default events;
