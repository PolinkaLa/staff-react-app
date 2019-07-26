import React, { Component} from 'react';
import UserCard from './UserCard';

class UserInfo extends Component {
    
    render() {
        return <div className='user-info'>
            <UserCard {...this.props.user} fullView={ true }/>
        </div>
    }
}
export default UserInfo;