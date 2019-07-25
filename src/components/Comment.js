import React from 'react';

function Comment(props) {
    return <div className='comment'>
    <p className='title'>{props.title}</p>
    <p className='text'>{props.text}</p>
</div>
}

export default Comment