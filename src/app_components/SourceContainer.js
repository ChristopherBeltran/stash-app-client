import React from 'react'
import SourceCard from './SourceCard'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


class SourceContainer extends React.Component {

    useStyles = () => makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        sourceStyle: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));

    render(){
        const classes = this.useStyles
        const { sources, user } = this.props;
        const sourceCards = sources.map((source, index) => {
            return (
            <Grid item xs key={index}>
            <SourceCard key={index} source={source} user={user} className={classes.sourceStyle}></SourceCard>
            </Grid>
            )
            })
        return(
            <div className={classes.root}>
            <Grid container spacing={3}>
                {sourceCards}
                </Grid>
            </div>
        )
    }
}

export default SourceContainer;