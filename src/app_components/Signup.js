import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Lock from "@material-ui/icons/Lock"
import LockOutlined from "@material-ui/icons/LockOutlined"
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm.js"
import { signup } from "../actions/signupForm.js"
import ErrorNotifications from "./ErrorNotifications.js"


import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

//import image from "images/bg7.jpg";

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    //  use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };

  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      100
    );
  }

  handleFormChange = event => {
    //const { name, value } = event.target
    const updatedFormInfo = {
      ...this.props.signupFormData,
      [event.target.name]: event.target.value
    }
    this.props.updateSignupForm(updatedFormInfo)
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.signup(this.props.signupFormData, this.props.history)
  }

  buttonHandler = () => {
    const values = Object.values(this.props.signupFormData)
    var blankFields = 4

    for(const v of values){
      if(v !== ""){
        blankFields --
      }
    }

    if(blankFields > 0){
      return(
        <Button default disabled={true} color="primary" size="lg" type="submit">
        Create Account
      </Button>
      )
    } else {
      return(
        <Button default color="primary" size="lg" type="submit">
        Create Account
      </Button>
        )
      }
    }

    errorHandler = () => {
      if(this.props.errors !== null && this.props.errors.length >= 1){
        return(
          <ErrorNotifications errors={this.props.errors}></ErrorNotifications>
        )
      }
    }

  render() {
    const { classes, ...rest } = this.props;
    const signupFormData = this.props.signupFormData
    const errors = this.props.errors
    //const image = <img src={require('images/bg7.jpg')} alt='background'/>
    return (
      <div id="signup-card">
          <div id="signup-container" className={classes.container}>
          {this.errorHandler()}
            <GridContainer justify="space-evenly">
              <GridItem xs={10} sm={4} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form} onSubmit={this.handleSubmit} >
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Sign Up</h4>
                    </CardHeader>
                    <p className={classes.divider}></p>
                    <CardBody>
                      <CustomInput
                        labelText="First Name"
                        id="name"
                        name="name"
                        value={signupFormData.name}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          id: "name",
                          name: "name",
                          value: signupFormData.name,
                          onChange: (event) => this.handleFormChange(event),
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Email"
                        id="email"
                        name="email"
                        value={signupFormData.email}
                        onChange={this.handleFormChange}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          id: "email",
                          name: "email",
                          value: signupFormData.email,
                          onChange: (event) => this.handleFormChange(event),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="password"
                        name="password"
                        value={signupFormData.password}
                        onChange={this.handleFormChange}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          id: "password",
                          name: "password",
                          value: signupFormData.password,
                          onChange: (event) => this.handleFormChange(event),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Lock className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                          autoComplete: "off"
                        }}
                      />
                      <CustomInput
                        labelText="Confirm Password"
                        id="password_confirmation"
                        name="password_confirmation"
                        value={signupFormData.password_confirmation}
                        onChange={this.handleFormChange}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          id: "password_confirmation",
                          name: "password_confirmation",
                          value: signupFormData.password_confirmation,
                          onChange: (event) => this.handleFormChange(event),
                          endAdornment: (
                            <InputAdornment position="end">
                              <LockOutlined className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                          autoComplete: "off"
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                        {this.buttonHandler()}
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
    );
  }
}

SignupPage.propTypes = {
  classes: PropTypes.object
};

const mapStateToProps = state => {
    return {
      signupFormData: state.signupForm,
      errors: state.errors
    }
  }

export default connect(mapStateToProps, { updateSignupForm, signup } ) (withStyles(loginPageStyle) (SignupPage))