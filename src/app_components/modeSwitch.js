import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import styles from "assets/jss/material-kit-react/customCheckboxRadioSwitch.jsx";
import { changeMode, updateUserDarkMode } from "../actions/darkMode.js";
import { connect } from "react-redux";

class ModeSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedA: this.props.darkMode,
      checkedB: true
    };
  }

  handleChange = name => event => {
      this.setState({ [name]: event.target.checked });
      this.props.updateUserDarkMode(this.props.user, event.target.checked);

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
            label="Dark Mode"
          />
        </div>
      </div>
    );
  }
}

export default connect(null, { changeMode, updateUserDarkMode }) (withStyles(styles) (ModeSwitch))