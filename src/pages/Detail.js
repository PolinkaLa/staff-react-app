import React from 'react';
import UserInfo from '../components/UserInfo';

function Detail(props) {
    return <div>
        <UserInfo userId={props.params.userId}/>
    </div>
}

export default Detail;