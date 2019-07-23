import React from 'react';
import UserInfo from '../components/UserInfo';
import UserCarusel from '../components/UserCarusel';
import { browserHistory } from 'react-router';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

function Detail(props) {
    return <div>
        <button onClick={ browserHistory.goBack }>Go Back</button>
        <h2>Other Users</h2>
        <UserCarusel/>
        <h2>User Info</h2>
        <UserInfo userId={ props.params.userId }/>
        <h2>Last Comments</h2>
        <CommentList userId={ props.params.userId }/>
        <h2>Add Comment</h2>
        <CommentForm/>
    </div>
}

export default Detail;