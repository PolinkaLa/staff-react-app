import React, { Component, Fragment }from 'react';
import UserInfo from './UserInfo';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { connect } from 'react-redux';
import { commentsFetchData, addingUser } from '../actions/comments';

class Detail extends Component {

    componentWillMount(){
        this.props.fetchCommentsData(`http://78qj8.mocklab.io/comments/${this.props.userId}`);
        this.props.addUserComment(this.props.comments);
    }
    render() {
        const currentUser = this.props.users.find((item) => item.id == this.props.userId);

        if (this.props.haveErrored && this.props.commentsHaveErrored) {
            return <Fragment>
                    <div className='user-detail'>Error...</div>
                </Fragment>
        }

        if (this.props.areLoading && this.props.commentsAreLoading) {
            return <Fragment>
                <div className='user-detail'>Loading...</div>
            </Fragment>
        }

        return <Fragment>
            <div className='user-detail'>
                <h2>User Info</h2>
                <UserInfo user = { currentUser }/>
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
        users: state.users,
        haveErrored: state.usersHaveErrored,
        areLoading: state.usersAreLoading,
        comments: state.comments,
        commentsHaveErrored: state.commentsHaveErrored,
        commentsAreLoading: state.commentsAreLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCommentsData: (url) => dispatch(commentsFetchData(url)),
        addUserComment: (comments) => dispatch(addingUser(comments))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);