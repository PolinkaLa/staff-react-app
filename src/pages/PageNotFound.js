import React from 'react';
import { Link } from 'react-router';

function PageNotFound() {

    return <div className='page-not-found'>
        <h1>This page not found</h1>
        <p>Try again from <Link to={'/users'}>home page</Link></p>
    </div>
}

export default PageNotFound