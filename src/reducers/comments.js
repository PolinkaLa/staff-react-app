import C from '../constants'

export function commentsHaveErrored(state = false, action) {
    switch (action.type) {
        case C.COMMENTS_HAVE_ERRORED:
            return action.haveErrored;

        default:
            return state;
    }
}

export function commentsAreLoading(state = false, action) {
    switch (action.type) {
        case C.COMMENTS_ARE_LOADING:
            return action.areLoading;

        default:
            return state;
    }
}

export function comments(state = [], action) {
    switch (action.type) {
        case C.COMMENTS_FETCH_DATA_SUCCESS:
            return [action.comments];

        case C.ADD_COMMENT:
            return state.map((item) => 
                (item.user == action.data.user) ? 
                {user: action.data.user, comments: item.comments.concat(action.data.comments)} : 
                [...state, {}] );
        
        case C.ADD_USER:

            if(state.find((item) => item.user == action.data.user)){
                return state
            }
            else {
                return [...state, action.data]
            }

        default:
            return state;
    }
}

