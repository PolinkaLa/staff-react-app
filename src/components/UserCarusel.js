import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { usersFetchData } from '../actions/users';

class UserCarusel extends Component{
    
    render() {
        return <div className='user-carusel'>
            {this.props.users.map((user) => (
                <Link to={`/users/${user.id}`} key={user.id}>
                    <img src={user.avatar} alt='avatar'/>
                </Link>
            ))}
        </div>
    }
}



export default UserCarusel;