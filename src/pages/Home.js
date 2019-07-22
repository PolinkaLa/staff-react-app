import React, { Fragment } from 'react';
import UsersList from '../components/UserList';

function Home(props) {
    return <Fragment>
        { (!props.children) ? (<UsersList/>) : (props.children) }
    </Fragment>
}

export default Home