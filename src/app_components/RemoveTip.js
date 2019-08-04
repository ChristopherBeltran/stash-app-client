import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
// core components
import tooltipsStyle from "assets/jss/material-kit-react/tooltipsStyle.jsx";

const RemoveTip = ({ classes }) => {
    return (
        <Tooltip
          id="tooltip-right"
          title="Tooltip on right"
          placement="right"
          classes={{ tooltip: classes.tooltip }}
        >
        </Tooltip>
    );
}

export default withStyles(tooltipsStyle)(RemoveTip);