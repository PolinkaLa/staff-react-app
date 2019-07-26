import React from 'react';

function UserCard(props) {
    const linkEmail = `mailto:${props.email}`
    return <div className='user-item'>
    <img src={props.avatar} alt='avatar'/>
    <p><span>First Name: </span>{props.firstName}</p>
    <p><span>Last Name: </span>{props.lastName}</p>
    <p><span>Position: </span>{props.position}</p>
    { props.fullView && 
        <p><span>Email: </span><a href={linkEmail}>{props.email}</a></p>
    }
</div>
}

export default UserCard