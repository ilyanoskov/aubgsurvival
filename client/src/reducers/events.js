import {REQUEST_EVENTS, RECEIVE_EVENTS} from '../actions/types';

const initialState = {"killer" : "Loading...", "victim" : "Loading..."}

const events = (state = initialState, action = {}) => {
    switch (action.type) {
        case REQUEST_EVENTS:
            return state;
        case RECEIVE_EVENTS:
            return action.events;
        default:
            return state;
    }
};

export default events;
