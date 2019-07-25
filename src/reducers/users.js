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


export function userHasErrored(state = false, action) {
    switch (action.type) {
        case 'USER_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function userIsLoading(state = false, action) {
    switch (action.type) {
        case 'USER_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function user(state = [], action) {
    switch (action.type) {
        case 'USER_FETCHS_DATA_SUCCESS':
            return action.user

        default:
            return state;
    }
}