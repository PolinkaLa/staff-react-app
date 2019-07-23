import React from 'react';

function UserCard(props) {
    return <div className='user-item'>
    <img src={props.avatar} alt='avatar'/>
    <p>{props.firstName}</p>
    <p>{props.lastName}</p>
    <p>{props.position}</p>
    { props.fullInfo === true &&
        <p>{props.email}</p>
    }
</div>
}

export default UserCard