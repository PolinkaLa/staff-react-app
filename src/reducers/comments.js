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

export function localComments(state = [], action) {
    switch (action.type) {
        case 'LOCAL_COMMENTS':
            if (!state.length)
                return [action.comments];
            else {
                return state.map((item) => (
                    (item.user == action.comments.user) ? (item.comments.push(action.comments.comments)): [...state, action.comments] ))
            }

        default:
            return state;
    }
}

export function comments(state = [], action) {
    switch (action.type) {
        case 'COMMENTS_FETCH_DATA_SUCCESS':
            console.log('fech comments')
            return [action.comments];

        default:
            return state;
    }
}