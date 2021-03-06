import C from '../constants'

export function commentsHaveErrored(bool) {
    return {
        type: C.COMMENTS_HAVE_ERRORED,
        haveErrored: bool
    };
}

export function commentsAreLoading(bool) {
    return {
        type: C.COMMENTS_ARE_LOADING,
        areLoading: bool
    };
}

export function commentsFetchDataSuccess(comments) {
    return {
        type: C.COMMENTS_FETCH_DATA_SUCCESS,
        comments
    };
}

export function addComment(data) {
    return {
        type: C.ADD_COMMENT,
        data
    };
}

export function addUser(data) {
    return {
        type: C.ADD_USER,
        data
    };
}

export function addingComment(data) {
    return (dispatch) => {
        dispatch(addComment(data));
    };
}

export function addingUser(data) {
    return (dispatch) => {
        dispatch(addUser(data));
    };
}

export function commentsFetchData(url) {
    return (dispatch) => {
        dispatch(commentsAreLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(commentsAreLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((comments) => dispatch(commentsFetchDataSuccess(comments)))
            .catch(() => dispatch(commentsHaveErrored(true)));
    };
}
