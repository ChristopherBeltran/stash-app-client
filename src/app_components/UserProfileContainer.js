import React from "react";
import { connect } from 'react-redux'
import UserProfile from './UserProfile'

class UserProfileContainer extends React.Component {

    render(){
        return(
            <div id="user-profile-container">
            <UserProfile></UserProfile>    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sources: state.sources,
        user: state.currentUser,
        stream: state.stream,
        loggedIn: !!state.currentUser,
    }
}

export default connect(mapStateToProps) (UserProfileContainer)
