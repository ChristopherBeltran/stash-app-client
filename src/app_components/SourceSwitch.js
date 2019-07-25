import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import styles from "assets/jss/material-kit-react/customCheckboxRadioSwitch.jsx";

class SourceSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedA: true,
      checkedB: false
    };
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  }
  render(){
    const { classes } = this.props;
    return (
      <div>
        <div>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedA}
                onChange={this.handleChange("checkedA")}
                value="checkedA"
                classes={{
                  switchBase: classes.switchBase,
                  checked: classes.switchChecked,
                  thumb: classes.switchIcon,
                  iconChecked: classes.switchIconChecked,
                  track: classes.switchBar
                }}
              />
            }
            classes={{
              label: classes.label
            }}
            label="Toggle is on"
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SourceSwitch);