import React from "react";
import Header from "components/Header/Header.jsx"
import NavLinks from './NavLinks'
import NavStaticLink from './NavStaticLink'
import NavSubmit from './NavSubmit'
import { connect } from 'react-redux'


const NavBar = ({ loggedIn, streamUpdate, isDesktop, stream }) => {
     const linkHandler = () => {
         if(window.location.pathname === "/setup" && isDesktop === true){
            return(
                <NavSubmit isDesktop={isDesktop} stream={stream} streamUpdate={streamUpdate}></NavSubmit>
            )
         }
        else if(loggedIn && window.location.pathname !== "/setup"){
            return(
                <NavLinks></NavLinks>
            )
        } else {
            return(
                <NavStaticLink></NavStaticLink>
            )
        }
     }

        return(
            <div id='navbar-header'>
                <Header color="info" brand="Stash App" fixed={true}
                rightLinks={linkHandler()}
                id="header">
                </Header>
            </div>
        )
    
}

export default NavBar;