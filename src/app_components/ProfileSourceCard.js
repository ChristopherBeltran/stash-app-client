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

const ProfileSourceCard = ({ source, updateSource, deleteSource }) => {

      return (
      <Card style={{width: "auto", height: "auto"}} justify="center">
        <CardBody>
            <Typography gutterBottom variant="h4">
                {source.name}
            </Typography>
               <SourceSwitch id={source.id} deleteSource={deleteSource} updateSource={updateSource} >
               </SourceSwitch>
        </CardBody>
      </Card>
    );
}

export default withStyles(style)(ProfileSourceCard);