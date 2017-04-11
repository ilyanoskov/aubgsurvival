import { combineReducers } from 'redux';
import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import players from './reducers/players';
import events from './reducers/events';

export default combineReducers({
    flashMessages,
    auth,
    players,
    events
});
