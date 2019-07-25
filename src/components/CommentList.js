import React, { Component } from 'react';
import Comment from './Comment';
import { connect } from 'react-redux';
import { commentsFetchData } from '../actions/comments';

class CommentList extends Component {
    constructor() {
        super();
        this.commentList = [];
    }

    componentDidMount() {
        this.props.fetchData(`http://78qj8.mocklab.io/comments/${this.props.userId}`);
    }

    render() {
        this.commentList = this.props.comments.map((item) => (
            item.user == this.props.userId ? item.comments : [])
        )

        this.localCommentList = this.props.localComments.map((item) => (
            item.user == this.props.userId ? item.comments : [])
        )

        if (this.props.haveErrored) {
            return <p>Error...</p>;
        }

        if (this.props.areLoading) {
            return <p>Loading...</p>;
        }
        
        if(!this.commentList[0]){
            return <p>Loading...</p>;
        }

        return (
            <div className='comment-list'>
                {this.commentList[0].map((comment) => (
                    <Comment key={comment.id} {...comment}/>
                ))}
                {this.localCommentList && this.localCommentList.map((comment) => (
                    <Comment key={comment.id} {...comment}/>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments,
        haveErrored: state.commentsHaveErrored,
        areLoading: state.commentsAreLoading,
        localComments: state.localComments
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(commentsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);