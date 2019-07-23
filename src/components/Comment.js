import React from 'react';

function Comment(props) {
    return <div className='comment'>
    <p>{props.title}</p>
    <p>{props.text}</p>
</div>
}

export default Comment