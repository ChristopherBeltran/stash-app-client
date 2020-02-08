import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Lock from "@material-ui/icons/Lock"
// @material-ui/icons
import Email from "@material-ui/icons/Email";
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
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/loginForm.js"
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
import ErrorNotifications from "./ErrorNotifications.js"
import { removeErrors } from "../actions/errors.js"
import { Link } from 'react-router-dom'


//import image from "images/bg7.jpg";

class LoginPage extends React.Component {
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
      ...this.props.loginFormData,
      [event.target.name]: event.target.value
    }
    this.props.updateLoginForm(updatedFormInfo)
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.login(this.props.loginFormData, this.props.history)
  }

  buttonHandler = () => {
    const values = Object.values(this.props.loginFormData)
    var blankFields = 2

    for(const v of values){
      if(v !== ""){
        blankFields --
      }
    }

    if(blankFields > 0){
      return(
        <Button default disabled={true} color="primary" size="lg" type="submit">
        Log In
      </Button>
      )
    } else {
      return(
        <Button default color="primary" size="lg" type="submit">
        Log In
      </Button>
        )
      }
    }

    errorHandler = () => {
      if(this.props.errors !== null){
      if(this.props.errors.length >= 1){
        setTimeout(() => { this.props.removeErrors(); }, 5000);
        return(
          <ErrorNotifications errors={this.props.errors}></ErrorNotifications>
        )
      }
    }
    }



  render() {
    const { classes, ...rest } = this.props;
    const loginFormData = this.props.loginFormData
    //const image = <img src={require('images/bg7.jpg')} alt='background'/>
    return (
      <div id="login-page" width="auto">
          <div id="login-container" className={classes.container}>
          {this.errorHandler()}
            <GridContainer justify="center" width="auto">
              <GridItem xs={10} sm={4} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form} onSubmit={this.handleSubmit}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Log In</h4>
                    </CardHeader>
                    <p className={classes.divider}></p>
                    <CardBody>
                      <CustomInput
                        labelText="Email"
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          id: "email",
                          name: "email",
                          value: loginFormData.email,
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
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          id: "password",
                          name: "password",
                          value: loginFormData.password,
                          onChange: (event) => this.handleFormChange(event),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Lock className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                          autoComplete: "off"
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      {this.buttonHandler()}                      
                    </CardFooter>
                    <div id="forgot-div">
                    <Link to='/forgotpassword' id="forgot-link">Forgot Password?</Link>
                    </div>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object
};

const mapStateToProps = state => {
    return {
      loginFormData: state.loginForm,
      errors: state.errors
    }
  }

export default connect(mapStateToProps, { updateLoginForm, login, removeErrors } ) (withStyles(loginPageStyle)(LoginPage))