import { RECEIVE_ALIVE_PLAYERS, REQUEST_ALIVE_PLAYERS } from '../actions/types';

const initialState = [
  {
    name: 'Loading...',
    kills: 0,
    id: '58e9252a47502020a46c4d3c',
    isKilled: true
  },
  {
    name: 'Loading...',
    kills: 0,
    id: '58e925b49ffcfd211519c4fd',
    isKilled: false
  }
];

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
