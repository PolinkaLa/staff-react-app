import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { usersFetchData } from '../actions/users';
import { Link } from 'react-router';

import UserCard from './UserCard'

class UserList extends Component {
    componentDidMount() {
        this.props.fetchData('http://78qj8.mocklab.io/users');
    }

    render() {
        if (this.props.haveErrored) {
            return <p>Error...</p>;
        }

        if (this.props.areLoading) {
            return <p>Loading...</p>;
        }

        return <Fragment>
                <h1>Staff React App</h1>
                <div className='user-list'>
                    {this.props.users.map((user) => (
                        <Link to={`/users/${user.id}`} key={user.id+10}>
                            <UserCard key={user.id} {...user}/>
                        </Link>
                    ))}
                </div>
        </Fragment>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        haveErrored: state.usersHaveErrored,
        areLoading: state.usersAreLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(usersFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);