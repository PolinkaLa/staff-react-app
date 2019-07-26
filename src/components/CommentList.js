import React, { Component } from 'react';
import Comment from './Comment';
import { connect } from 'react-redux';

class CommentList extends Component {
    componentDidMount() {
        
    }
    
    render() {

        const index = this.props.comments.findIndex((elem) => 
            elem.user == this.props.userId)

        if (this.props.haveErrored) {
            return <p>Error...</p>;
        }

        if (this.props.areLoading) {
            return <p>Loading...</p>;
        }

        const arr = this.props.comments[index]

        if(!arr) 
            return <p>Loading...</p>;
        const arrLast5 = arr.comments.slice(-5)

console.log(arr)
console.log(arr.comments)

        return (
            <div className='comment-list'>
                {arrLast5.map((comment) => (
                    <Comment key={comment.id} {...comment}/>
                ))}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    };
};

export default connect(mapStateToProps)(CommentList);