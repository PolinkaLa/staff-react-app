import React, { Fragment, Component } from 'react';
import UserCarusel from '../components/UserCarusel';
import Detail from '../components/Detail';
import { connect } from 'react-redux';
import { usersFetchData } from '../actions/users';
import { browserHistory, Link } from 'react-router';


class Info extends Component {
    componentDidMount(){
        this.props.fetchUsersData('http://78qj8.mocklab.io/users');
    }
    render() {
        return <Fragment>
            <div className='nav'>
                <button className='back' onClick={ browserHistory.goBack }>Back</button>
                <button className='home'><Link to='/'>Home</Link></button>
            </div>
            <h2>Other Users</h2>
            <UserCarusel users = { this.props.users }/>
            <h1>User Detail</h1>
            <Detail userId={this.props.params.userId}/>
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
        fetchUsersData: (url) => dispatch(usersFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Info)