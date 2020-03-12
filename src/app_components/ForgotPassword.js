import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
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
import { updateForgotPasswordForm, resetForgotPasswordForm } from "../actions/forgotPassword.js"
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
import ErrorNotifications from "./ErrorNotifications.js"
import { addErrors, removeErrors } from "../actions/errors.js"
import { Link } from 'react-router-dom'



class ForgotPassword extends React.Component {
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
      ...this.props.forgotPasswordFormData,
      [event.target.name]: event.target.value
    }
    this.props.updateForgotPasswordForm(updatedFormInfo)
  }

  forgotPasswordReq = async () => {
      const auth_params = {
          email: this.props.forgotPasswordFormData.email
      }
      const settings = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://stashapp.herokuapp.com"
        },
        body: JSON.stringify(auth_params)
        }

        try {
            const fetchResponse = await fetch(`https://the-stash-app.herokuapp.com/api/v1/password_resets`, settings);
            const data = await fetchResponse.json();
            if(data.reset){
                this.props.addErrors(data);
                this.forceUpdate();
            } else {
                this.props.resetForgotPasswordForm()
                this.props.history.push('/passwordsent')
            }
        } catch(error) {

        }

    }

  handleSubmit = event => {
    event.preventDefault()
    this.forgotPasswordReq();
  }

  buttonHandler = () => {
    const values = Object.values(this.props.forgotPasswordFormData)
    var blankFields = 1

    for(const v of values){
      if(v !== ""){
        blankFields --
      }
    }

    if(blankFields > 0){
      return(
        <Button default disabled={true} color="primary" size="lg" type="submit">
        Submit
      </Button>
      )
    } else {
      return(
        <Button default color="primary" size="lg" type="submit">
        Submit
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
    const forgotPasswordFormData = this.props.forgotPasswordFormData
    return (
      <div id="forgot-password-page" width="auto">
          <div id="forgot-password-container" className={classes.container}>
          {this.errorHandler()}
            <GridContainer justify="center" width="auto">
              <GridItem xs={10} sm={4} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form} onSubmit={this.handleSubmit}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Forgot Password</h4>
                    </CardHeader>
                    <p className={classes.divider}></p>
                    <CardBody>
                    <p>Enter your account email below and we will send a password reset link</p>
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
                          value: forgotPasswordFormData.email,
                          onChange: (event) => this.handleFormChange(event),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
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

ForgotPassword.propTypes = {
  classes: PropTypes.object
};

const mapStateToProps = state => {
    return {
      forgotPasswordFormData: state.forgotPasswordForm,
      errors: state.errors
    }
  }

export default connect(mapStateToProps, { updateForgotPasswordForm, resetForgotPasswordForm, addErrors, removeErrors } ) (withStyles(loginPageStyle)(ForgotPassword))