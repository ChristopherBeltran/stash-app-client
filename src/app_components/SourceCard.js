import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import SourceSwitch from './SourceSwitch';
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { cardTitle } from "assets/jss/material-kit-react.jsx";


const style = {
  cardTitle
};

const SourceCard = ({ source }) => {

      return (
      <Card style={{width: "20rem"}}>
        <CardBody>
            <Typography gutterBottom variant="h4">
                {source.name}
            </Typography>
               <SourceSwitch>
               </SourceSwitch>
           <Divider variant="middle" />
           <Typography variant="body2" color="textSecondary" component="p">
          {source.description}
          </Typography>
        </CardBody>
      </Card>
    );
}

export default withStyles(style)(SourceCard);
