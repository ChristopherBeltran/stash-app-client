import React from 'react';
import { Link } from 'react-router-dom'
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

const style = {
  cardTitle,
  cardLink,
  cardSubtitle
};

class Home extends React.Component {
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
        <div name="home-card">
        <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
            <Card className={classes[this.state.cardAnimaton]} style={{width: "30rem"}}>
            <CardBody>
            <h2 style={typography.defaultFontStyle}>Get stashing today!</h2>
            <p>
                Sign up or log in below.
            </p>
            <Button default color="primary" size="lg" style={padding} href="/signup">
                        Sign Up
            </Button>
            <Button default color="primary" variant="outlined" style={padding} size="lg" href="/login">
                        Log in
            </Button>
            </CardBody>
            </Card>
            </GridItem>
            </GridContainer>
            </div>
    );
  }
}

export default withStyles(style)(Home);