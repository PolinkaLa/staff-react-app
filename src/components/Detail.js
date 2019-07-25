import React, { Component, Fragment }from 'react';
import UserInfo from './UserInfo';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { connect } from 'react-redux';
import { userFetchData} from '../actions/users';
import { commentsFetchData } from '../actions/comments';

class Detail extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.fetchUserData(`http://78qj8.mocklab.io/users/${this.props.userId}`);
        this.props.fetrhCommentsData (`http://78qj8.mocklab.io/comments/${this.props.userId}`)
    }
    forceUpdate() {
        console.log('fors')
    }
    render() {

        if (this.props.haveErrored && this.props.hasErrored && this.props.commentsHaveErrored) {
            return <Fragment>
                    <div className='user-detail'>Error...</div>
                </Fragment>
        }

        if (this.props.areLoading && this.props.isLoading && this.props.commentsAreLoading) {
            return <Fragment>
                <div className='user-detail'>Loading...</div>
            </Fragment>
        }

        return <Fragment>
            <div className='user-detail'>
                <h2>User Info</h2>
                <UserInfo user = { this.props.user }/>
                <h2>Last Comments</h2>
                <CommentList comments={ this.props.comments } userId={this.props.userId}/>
                <h2>Add Comment</h2>
                <CommentForm userId={ this.props.userId }/>
            </div>
        </Fragment>
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user,
        hasErrored: state.userHasErrored,
        isLoading: state.userIsLoading,
        comments: state.comments,
        commentsHaveErrored: state.commentsHaveErrored,
        commentsAreLoading: state.commentsAreLoading

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserData: (url) => dispatch(userFetchData(url)),
        fetrhCommentsData: (url) => dispatch(commentsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);