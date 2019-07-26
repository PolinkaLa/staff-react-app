import C from '../constants'

export function usersHaveErrored(bool) {
    return {
        type: C.USERS_HAVE_ERRORED,
        haveErrored: bool
    };
}

export function usersAreLoading(bool) {
    return {
        type: C.USERS_ARE_LOADING,
        areLoading: bool
    };
}

export function usersFetchDataSuccess(users) {
    return {
        type: C.USERS_FETCH_DATA_SUCCESS,
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
