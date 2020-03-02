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
      checkedB: true,
      checkedC: false
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    let stream = this.props.streamId;
    let updateExistingStream = this.props.updateExistingStream;

    if(window.location.pathname === "/profile" && this.props.avail !== true){
      let profileCheckedB = this.state.checkedB;
      if(profileCheckedB === true){
        let profileSource = this.props.id;
        updateExistingStream(stream, profileSource, false)
      }
    } else if(window.location.pathname === "/profile" && this.props.avail === true){
      let profileCheckedC = this.state.checkedC;
      if(profileCheckedC === false){
        let profileSource = this.props.id;
        updateExistingStream(stream, profileSource, true)
      }
    } else {
      //this.setState({ [name]: event.target.checked });
      let checked = this.state.checkedA
      if(checked === false){
        let source = this.props.id
        this.props.updateSource(source)
      } else if(checked === true){
        let source = this.props.id
        this.props.deleteSource(source)
      }
    }
  }

  labelHandler = () => {
    if(window.location.pathname === "/profile" && this.props.avail !== true){
      return "Remove Source"
    } else {
      return "Add Source"
    }
  }

  render(){
    const { classes } = this.props;

    const switchHandler = () => {
      if(window.location.pathname === "/profile" && this.props.avail === false){
        return(
          <Switch
                  checked={this.state.checkedB}
                  onChange={this.handleChange("checkedB")}
                  value="checkedB"
                  classes={{
                    switchBase: classes.switchBase,
                    checked: classes.switchChecked,
                    thumb: classes.switchIcon,
                    iconChecked: classes.switchIconChecked,
                    track: classes.switchBar
                  }}
                />
              )
        } else if(window.location.pathname === "/profile" && this.props.avail === true){
          return(
            <Switch
                    checked={this.state.checkedC}
                    onChange={this.handleChange("checkedC")}
                    value="checkedC"
                    classes={{
                      switchBase: classes.switchBase,
                      checked: classes.switchChecked,
                      thumb: classes.switchIcon,
                      iconChecked: classes.switchIconChecked,
                      track: classes.switchBar
                    }}
                  />
                )
        } 
        
        else {
          return(
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
          )
        }
    }

    return (
      <div>
        <div>
          <FormControlLabel
            control={
              switchHandler()
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