import {RECEIVE_ALIVE_PLAYERS, REQUEST_ALIVE_PLAYERS} from '../actions/types';

const initialState = [{
    name : "loading...",
    kills : 0,
    id : "123"
}];

const getPlayers = (state = [{"name":"Alex Parunov","kills":0,"id":"58e9252a47502020a46c4d3c","isKilled":true},{"name":"Ilya Noskov","kills":2,"id":"58e925b49ffcfd211519c4fd","isKilled":false},{"name":"Vasya Vasya","kills":10,"id":"58e9294ef53c4d21dfcee52f","isKilled":true},{"name":"Ilya Ilyin ","kills":6,"id":"58e9295ef53c4d21dfcee530","isKilled":false},{"name":"Nikolay Drozdov","kills":0,"id":"58e9755fb8cdcb22dafd5e85","isKilled":false},{"name":"Filip Filipov","kills":0,"id":"58e97573b8cdcb22dafd5e86","isKilled":false}], action = {}) => {
    switch (action.type) {
        case REQUEST_ALIVE_PLAYERS:
            return state;
        case RECEIVE_ALIVE_PLAYERS:
            return state;
            // action.players;

        default:
            return state;
    }
};

export default getPlayers;
