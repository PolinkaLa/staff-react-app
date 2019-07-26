export function usersHaveErrored(state = false, action) {
    switch (action.type) {
        case 'USERS_HAVE_ERRORED':
            return action.haveErrored;

        default:
            return state;
    }
}

export function usersAreLoading(state = false, action) {
    switch (action.type) {
        case 'USERS_ARE_LOADING':
            return action.areLoading;

        default:
            return state;
    }
}

export function users(state = [], action) {
    switch (action.type) {
        case 'USERS_FETCH_DATA_SUCCESS':
            return action.users;

        default:
            return state;
    }
}
