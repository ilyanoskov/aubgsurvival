import userApi from '../api/userApi';

export function loadUsers() {
    return function(dispatch) {
        return userApi.getAllUsers().then(users => {
            dispatch(loadUsersSuccess(users));
        }).catch(error => {
            throw(error);
        });
    }
}
