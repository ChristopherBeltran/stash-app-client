import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";

const styles = {
  textCenter: {
    textAlign: "center"
  }
};
 
const useStyles = makeStyles(styles);

export default function UserProfile(){
  const classes = useStyles();
  return (
    <div>
      <CustomTabs
        headerColor="primary"
        tabs={[
          {
            tabName: "Profile",
            tabIcon: Face,
            tabContent: (
              <p className={classes.textCenter}>
                I think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that
                things could be at. So when you get something that has
                the name Kanye West on it, it’s supposed to be pushing
                the furthest possibilities. I will be the leader of a
                company that ends up being worth billions of dollars,
                because I got the answers. I understand culture. I am
                the nucleus.
              </p>
            )
          },
          {
            tabName: "",
            tabIcon: Chat,
            tabContent: (
              <p className={classes.textCenter}>
                I think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that
                things could be at. I will be the leader of a company
                that ends up being worth billions of dollars, because
                I got the answers. I understand culture. I am the
                nucleus. I think that’s a responsibility that I have,
                to push possibilities, to show people, this is the
                level that things could be at.
              </p>
            )
          },
          {
            tabName: "Settings",
            tabIcon: Build,
            tabContent: (
              <p className={classes.textCenter}>
                think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that
                things could be at. So when you get something that has
                the name Kanye West on it, it’s supposed to be pushing
                the furthest possibilities. I will be the leader of a
                company that ends up being worth billions of dollars,
                because I got the answers. I understand culture. I am
                the nucleus.
              </p>
            )
          }
        ]}
      />
    </div>
  );
};