import React from 'react';
//import { Link } from 'react-router-dom'
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import typographyStyle from "assets/jss/material-kit-react/components/typographyStyle.jsx"
import { cardTitle, cardLink, cardSubtitle } from "assets/jss/material-kit-react.jsx";
import LocalLibrary from "@material-ui/icons/LocalLibrarySharp";

const style = {
  cardTitle,
  cardLink,
  cardSubtitle
};

class PasswordSent extends React.Component {
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
          700
        );
        
      }


      render() {
        const { classes, ...rest } = this.props;
        const typography = { typographyStyle }
        const padding = {
            margin: "25px"
        }
    return (
        <div id="password-sent-card">
        <GridContainer justify="space-evenly">
        <GridItem xs={12} sm={8} md={4}>
        <Card className={classes[this.state.cardAnimaton]} >
          <CardBody>
          <h3 id="home-card-text">A password reset link has been sent to your email. Follow the instructions to reset your password.</h3>
          </CardBody>
        </Card>
        </GridItem>
            </GridContainer>
            </div>
    );
  }
}

export default withStyles(style)(PasswordSent);