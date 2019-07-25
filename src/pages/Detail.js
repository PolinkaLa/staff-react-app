import React, { Fragment }from 'react';
import UserInfo from '../components/UserInfo';
import UserCarusel from '../components/UserCarusel';
import { browserHistory } from 'react-router';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

function Detail(props) {
    return <Fragment>
        <button onClick={ browserHistory.goBack }>Go Back</button>
        <h1>User Detail</h1>
        <div className='user-detail'>
            <h2>Other Users</h2>
            <UserCarusel userId={ props.params.userId }/>
            <h2>User Info</h2>
            <UserInfo userId={ props.params.userId }/>
            <h2>Last Comments</h2>
            <CommentList userId={ props.params.userId }/>
            <h2>Add Comment</h2>
            <CommentForm userId={ props.params.userId }/>
        </div>
    </Fragment>
}

export default Detail;