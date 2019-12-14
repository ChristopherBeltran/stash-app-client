import React from "react";
import Header from "components/Header/Header.jsx"
import NavLinks from './NavLinks'
import NavStaticLink from './NavStaticLink'
import NavSubmit from './NavSubmit'


const NavBar = ({ loggedIn, streamUpdate }) => {
     const linkHandler = () => {
         if(window.location.pathname === "/stream/setup"){
            return(
                <NavSubmit streamUpdate={streamUpdate}></NavSubmit>
            )
         }
        else if(loggedIn && window.location.pathname !== "/stream/setup"){
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
                <Header color="info" brand="Stash App" position="sticky" 
                rightLinks={linkHandler()}
                id="header">
                </Header>
            </div>
        )
    
}

export default NavBar;