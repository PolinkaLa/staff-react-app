import { combineReducers } from 'redux';
import { users, usersHaveErrored, usersAreLoading } from './users';
import { comments, commentsHaveErrored, commentsAreLoading, localComments } from './comments'

export default combineReducers({
    users,
    usersHaveErrored,
    usersAreLoading,
    comments,
    commentsHaveErrored,
    commentsAreLoading,
    localComments
});