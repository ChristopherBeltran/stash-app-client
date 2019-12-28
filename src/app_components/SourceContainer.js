import React from 'react'
import SourceCard from './SourceCard'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridItem from '../components/Grid/GridItem.jsx'
import Button from '../components/CustomButtons/Button.jsx'
import ScrollUpButton from "react-scroll-up-button";



class SourceContainer extends React.Component {

    useStyles = () => makeStyles(theme => ({
        root: {
          flexGrow: 1,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          overflow: 'visible',
        },
        sourceStyle: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
        gridList: {
          width: 100,
          height: 450,
        },
      }));

    render(){
        const classes = this.useStyles
        const { sources, user, updateSource, deleteSource, mobileHandler } = this.props;
        const sourceCards = sources.map((source, index) => {
            return (
            <GridItem key={index} xs={10} sm={4} md={4}>
            <SourceCard key={index} source={source} user={user} className={classes.sourceStyle} deleteSource={deleteSource}updateSource={updateSource}></SourceCard>
            </GridItem>
            )
            })
        return(
            <div id="source-container">
            <Grid container justify="space-evenly">
                {mobileHandler()}
                {sourceCards}
                </Grid>
                <ScrollUpButton color="primary"/>
            </div>
        )
    }
}

export default SourceContainer;