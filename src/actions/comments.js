export function commentsHaveErrored(bool) {
    return {
        type: 'COMMENTS_HAVE_ERRORED',
        haveErrored: bool
    };
}

export function commentsAreLoading(bool) {
    return {
        type: 'COMMENTS_ARE_LOADING',
        areLoading: bool
    };
}

export function commentsFetchDataSuccess(comments) {
    return {
        type: 'COMMENTS_FETCH_DATA_SUCCESS',
        comments
    };
}

export function addComments(comments) {
    console.log('addComments')
    return {
        type: 'LOCAL_COMMENTS',
        comments
    };
}

export function addingComments(comments) {
    console.log('addingComments')
    return (dispatch) => {
        dispatch(addComments(comments));
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