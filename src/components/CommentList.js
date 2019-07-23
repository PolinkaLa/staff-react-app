import React, { Component } from 'react';
import Comment from './Comment';
import { connect } from 'react-redux';
import { commentsFetchData } from '../actions/comments';

class CommentList extends Component {

    componentDidMount() {
        this.props.fetchData(`http://78qj8.mocklab.io/comments/${this.props.userId}`);
    }

    render() {
        if (this.props.haveErrored) {
            return <p>Error...</p>;
        }

        if (this.props.areLoading) {
            return <p>Loading…</p>;
        }

        return (
            <div className='comment-list'>
                {this.props.comments.map((comment) => (
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
        areLoading: state.commentsAreLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(commentsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);