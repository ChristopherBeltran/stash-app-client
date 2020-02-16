import React from "react";
import { connect } from 'react-redux'
import UserProfile from './UserProfile'

class UserProfileContainer extends React.Component {

    render(){
        return(
            <div>
            <UserProfile></UserProfile>    
            </div>
        )
    }
}

export default connect(mapStateToProps) (UserProfileContainer)
