import React from 'react';
import { Link } from 'react-router';

function PageNotFound() {

    return <div className='page-not-found'>
        <p>This page not found</p>
        <p>Try again from <Link to={'/users'}>home page</Link></p>
    </div>
}

export default PageNotFound