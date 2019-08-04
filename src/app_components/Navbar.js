import React from "react";
import Header from "components/Header/Header.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Button from "components/CustomButtons/Button.jsx";
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';


const NavBar = () => {

        return(
            <div>
                <Header color="info" brand="Stash App" position="sticky" 
                rightLinks={<HeaderLinks />}>
                <Toolbar>
                <Button size="lg" color="transparent" link="true">Stream</Button>
                </Toolbar>
                </Header>
            </div>
        )
    
}

export default NavBar;