import React from "react";
import Header from "components/Header/Header.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Button from "components/CustomButtons/Button.jsx";
import Typography from '@material-ui/core/Typography';

const NavBar = () => {

        return(
            <div>
                <Header position="static" color="info" brand="Stash App" >
                </Header>
            </div>
        )
    
}

export default NavBar;