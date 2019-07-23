export function commentsHaveErrored(state = false, action) {
    switch (action.type) {
        case 'COMMENTS_HAVE_ERRORED':
            return action.haveErrored;

        default:
            return state;
    }
}

export function commentsAreLoading(state = false, action) {
    switch (action.type) {
        case 'COMMENTS_ARE_LOADING':
            return action.areLoading;

        default:
            return state;
    }
}

export function comments(state = [], action) {
    switch (action.type) {
        case 'COMMENTS_FETCH_DATA_SUCCESS':
            return action.comments;

        default:
            return state;
    }
}