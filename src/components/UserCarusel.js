import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { usersFetchData } from '../actions/users';

class UserCarusel extends Component{
    
    componentDidMount() {
        if(!this.props.users.length) {
            this.props.fetchData('http://78qj8.mocklab.io/users');
        }
    }

    render() {
        if (this.props.haveErrored) {
            return <div className='user-carusel'>Error...</div>;
        }

        if (this.props.areLoading) {
            return <div className='user-carusel'>Loading...</div>;
        }

        return <div className='user-carusel'>
            {this.props.users.map((user) => (
                <Link to={`/users/${user.id}`} key={user.id} userId={ this.props.userId }>
                    <img src={user.avatar} alt='avatar'/>
                </Link>
            ))}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserCarusel);