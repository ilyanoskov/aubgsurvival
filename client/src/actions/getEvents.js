import axios from 'axios';
import {REQUEST_EVENTS, RECEIVE_EVENTS} from '../actions/types';

export function request(events) {
    return {type: REQUEST_EVENTS, events }
}

export function receive(events) {
    return {type: RECEIVE_EVENTS, events }
}

export function getEvents(events) {
    return function(dispatch) {
        dispatch(request(events));
        return axios.get('https://aubgsurvival2.herokuapp.com/api/events').then(
            res => dispatch(receive(res.data)))
    }
};
