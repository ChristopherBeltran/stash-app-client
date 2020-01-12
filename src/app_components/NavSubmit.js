import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.jsx";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function NavSubmit({ ...props }) {
  const { classes } = props;
  const { streamUpdate } = props;
  const { stream } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    streamUpdate()
  }

  var submitButton = ''
  if(stream.source_ids !== null && stream.source_ids !== undefined){
    if(stream.source_ids.length > 0){
      submitButton = <Button color="primary" size="lg" block={true} type="submit">Create Stream</Button>
    } else {
      submitButton = <Button disabled={true} color="primary" size="lg" block={true} type="submit">Create Stream</Button>
    }
  }
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <form onSubmit={handleSubmit} >
        {submitButton}
                </form>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(NavSubmit)