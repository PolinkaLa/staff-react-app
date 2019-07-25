import React, { Component } from 'react';
import Comment from './Comment';
import { connect } from 'react-redux';

class CommentList extends Component {

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

        if(!this.localCommentList.length && !this.props.comments){
            return <p>Loading...</p>;
        }

        console.log(this.props.comments);
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
        localComments: state.localComments
    };
};

export default connect(mapStateToProps)(CommentList);