import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { commentsFetchData, addingUser } from '../actions/comments';

class UserCarusel extends Component {
    handlerLoadComment = (id) => {
        fetch(`http://78qj8.mocklab.io/comments/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((comments) => this.props.addUserComment(comments))
            .catch(() => this.props.addUserComment())
    }
    
    render() {
        return <div className='user-carusel'>
            {this.props.users.map((user) => (
                <Link to={`/users/${user.id}`} key={user.id} 
                onClick={() => this.handlerLoadComment(user.id)}
                >
                    <img src={user.avatar} alt='avatar'/>
                </Link>
            ))}
        </div>
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.users,
        haveErrored: state.usersHaveErrored,
        areLoading: state.usersAreLoading,
        comments: state.comments,
        commentHasErrored: state.commentHasErrored,
        commentIsLoading: state.commentIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCommentData: (url) => dispatch(commentsFetchData(url)),
        addUserComment: (comments) => dispatch(addingUser(comments))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCarusel);
