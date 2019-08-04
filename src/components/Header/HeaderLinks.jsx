/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
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
import Logout from '../../app_components/Logout.js'

// @material-ui/icons
import { Apps, CloudDownload, Dashboard, CollectionsBookmark, Person, Explore, Bookmarks } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
        href="/stream"
        color="transparent"
        className={classes.navLink}
        ><Explore></Explore>Stream
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/stash"
          color="transparent"
          className={classes.navLink}
        ><Bookmarks></Bookmarks>Stash
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/profile"
          color="transparent"
          className={classes.navLink}
        ><Person></Person>Profile
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Logout
          className={classes.navLink}>
      </Logout>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
