import {RECEIVE_ALIVE_PLAYERS, REQUEST_ALIVE_PLAYERS} from '../actions/types';

const initialState = [{
    name : "loading...",
    kills : 0,
    id : "123"
}];

const getPlayers = (state = initialState, action = {}) => {
    switch (action.type) {
        case REQUEST_ALIVE_PLAYERS:
            return state;
        case RECEIVE_ALIVE_PLAYERS:
            return action.players;
        default:
            return state;
    }
};

export default getPlayers;
