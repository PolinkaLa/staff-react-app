import { combineReducers } from 'redux';
import { users, usersHaveErrored, usersAreLoading } from './users';

export default combineReducers({
    users,
    usersHaveErrored,
    usersAreLoading
});