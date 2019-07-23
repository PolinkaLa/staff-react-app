import React, { Component} from 'react';
import UserCard from './UserCard';
import { connect } from 'react-redux';
import { usersFetchData } from '../actions/users';

class UserInfo extends Component {

    componentDidMount() {
        if(!this.props.users.length) {
            this.props.fetchData('http://78qj8.mocklab.io/users');
        }
    }
    
    render(){
        const { userId } = this.props;
        const user = this.props.users.find((i) => i.id == userId)

        return <div className='user-info'>
            <UserCard fullInfo={true} {...user}/>
        </div>}
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

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);