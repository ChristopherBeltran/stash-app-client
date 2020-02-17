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
      checkedA: false,
      checkedB: false
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    let checked = this.state.checkedA
    if(checked === false){
      let source = this.props.id
      this.props.updateSource(source)
    } else if(checked === true){
      let source = this.props.id
      this.props.deleteSource(source)
    }

  }

  labelHandler = () => {
    if(window.location.pathname === "/profile"){
      return "Remove Source"
    } else {
      return "Add Source"
    }
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
            label={this.labelHandler()}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles) (SourceSwitch)