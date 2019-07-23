import React from 'react';
import UserInfo from '../components/UserInfo';
import UserCarusel from '../components/UserCarusel';
import { browserHistory } from 'react-router';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

function Detail(props) {
    return <div>
        <button onClick={browserHistory.goBack}>Go Back</button>
        <UserCarusel/>
        <UserInfo userId={props.params.userId}/>
        <CommentList/>
        <CommentForm/>
    </div>
}

export default Detail;