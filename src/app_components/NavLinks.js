import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"
import { withRouter } from 'react-router-dom'

// @material-ui/icons
import { Apps, CloudDownload, Dashboard, CollectionsBookmark, Person, Explore, Bookmarks } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function NavLinks({ ...props }) {
  const { classes } = props;
  const { logout, history } = props
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem} id="nav-list">
        <Button
        href="/stream"
        color="transparent"
        className={classes.navLink}
        ><Explore></Explore>Stream
        </Button>
      </ListItem>
      <ListItem className={classes.listItem} id="nav-list">
        <Button
          href="/stash"
          color="transparent"
          className={classes.navLink}
        ><Bookmarks></Bookmarks>Stash
        </Button>
      </ListItem>
      
      {/* Edit Profile button (will be added in later version)
      <ListItem className={classes.listItem}>
        <Button 
          href="/profile"
          color="transparent"
          className={classes.navLink}
        ><Person></Person>Profile
        </Button>
      </ListItem> */}
      <ListItem className={classes.listItem} id="nav-list">
      <form onSubmit={(event) => {
        event.preventDefault()
        logout()
        history.push('/')
      }
    }>
      <Button color="transparent" size="lg" block={true} type="submit" className={classes.navLink}>Log Out</Button>
    </form>
      </ListItem>
    </List>
  );
}

export default withRouter(connect(null, { logout } )(withStyles(headerLinksStyle)(NavLinks)))