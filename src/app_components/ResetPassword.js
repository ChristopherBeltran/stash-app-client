import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Lock from "@material-ui/icons/Lock"
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
import { updateResetPasswordForm, clearResetPasswordForm } from "../actions/resetPassword.js"
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
import ErrorNotifications from "./ErrorNotifications.js"
import { addErrors, removeErrors } from "../actions/errors.js"
import { Link } from 'react-router-dom'



class ResetPassword extends React.Component {
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
      ...this.props.resetPasswordFormData,
      [event.target.name]: event.target.value
    }
    this.props.updateResetPasswordForm(updatedFormInfo)
  }

  resetPasswordReq = async () => {
      const auth_params = {
          user: {
          password: this.props.resetPasswordFormData.password
          }
      }
      const settings = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://stashapp.herokuapp.com"
        },
        body: JSON.stringify(auth_params)
        }
    
        const hashId = this.props.match.params.id

        try {
            const fetchResponse = await fetch(`http://localhost:3000/api/v1/password_resets/${hashId}`, settings);
            const data = await fetchResponse.json();
            if(data.expired || data.error){
                debugger;
                this.props.addErrors(data);
                this.forceUpdate();
            } else {
                this.props.history.push('/resetsuccess')
            }
        } catch(error) {

        }

    }

  handleSubmit = event => {
    event.preventDefault()
    this.resetPasswordReq();
  }

  buttonHandler = () => {
    const values = Object.values(this.props.resetPasswordFormData)
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
    const resetPasswordFormData = this.props.resetPasswordFormData
    console.log(this.props.match.params.id)
    return (
      <div id="reset-password-page" width="auto">
          <div id="reset-password-container" className={classes.container}>
          {this.errorHandler()}
            <GridContainer justify="center" width="auto">
              <GridItem xs={10} sm={4} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form} onSubmit={this.handleSubmit}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Reset Password</h4>
                    </CardHeader>
                    <p className={classes.divider}></p>
                    <CardBody>
                    <p>Please enter a new password for your account</p>
                      <CustomInput
                        labelText="Password"
                        id="password"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          id: "password",
                          name: "password",
                          value: resetPasswordFormData.email,
                          onChange: (event) => this.handleFormChange(event),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Lock className={classes.inputIconsColor} />
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

ResetPassword.propTypes = {
  classes: PropTypes.object
};

const mapStateToProps = state => {
    return {
      resetPasswordFormData: state.resetPasswordForm,
      errors: state.errors
    }
  }

export default connect(mapStateToProps, { updateResetPasswordForm, clearResetPasswordForm, addErrors, removeErrors } ) (withStyles(loginPageStyle)(ResetPassword))