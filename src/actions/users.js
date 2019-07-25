export function usersHaveErrored(bool) {
    return {
        type: 'USERS_HAVE_ERRORED',
        haveErrored: bool
    };
}

export function usersAreLoading(bool) {
    return {
        type: 'USERS_ARE_LOADING',
        areLoading: bool
    };
}

export function usersFetchDataSuccess(users) {
    return {
        type: 'USERS_FETCH_DATA_SUCCESS',
        users
    };
}

export function usersFetchData(url) {
    return (dispatch) => {
        dispatch(usersAreLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(usersAreLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((users) => dispatch(usersFetchDataSuccess(users)))
            .catch(() => dispatch(usersHaveErrored(true)));
    };
}

export function userHasErrored(bool) {
    return {
        type: 'USER_HAS_ERRORED',
        hasErrored: bool
    };
}

export function userIsLoading(bool) {
    return {
        type: 'USER_IS_LOADING',
        isLoading: bool
    };
}

export function userFetchsDataSuccess(user) {
    return {
        type: 'USER_FETCHS_DATA_SUCCESS',
        user
    };
}
export function userFetchData(url) {
    return (dispatch) => {
        dispatch(userIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(userIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((user) => dispatch(userFetchsDataSuccess(user)))
            .catch(() => dispatch(userHasErrored(true)));
    };
}