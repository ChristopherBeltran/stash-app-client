import React from 'react'
import SourceCard from './SourceCard'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridItem from '../components/Grid/GridItem.jsx'
import Button from '../components/CustomButtons/Button.jsx'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';



class SourceContainer extends React.Component {

    useStyles = () => makeStyles(theme => ({
        root: {
          flexGrow: 1,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          overflow: 'hidden',
        },
        sourceStyle: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
        gridList: {
          width: 500,
          height: 450,
        },
      }));

      handleSubmit = (event) => {
        event.preventDefault();
        this.props.streamUpdate()
      }

    render(){
        const classes = this.useStyles
        const { sources, user, updateSource, deleteSource } = this.props;
        const sourceCards = sources.map((source, index) => {
            return (
            //<GridListTile key={index} cols={1}>
            <SourceCard key={index} source={source} user={user} className={classes.sourceStyle} deleteSource={deleteSource}updateSource={updateSource}></SourceCard>
            //</GridListTile>
            )
            })
        return(
            <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList} cols={2} >
                <GridListTile  style={{ height: 'auto' }} cols={1}>
                {sourceCards}
                </GridListTile>
                <GridItem xs={4} position="relative">
                <form onSubmit={this.handleSubmit} >
                <Button color="primary" round size="lg" block={true} type="submit">Create Stream</Button>
                </form>
                </GridItem>
                </GridList>
            </div>
        )
    }
}

export default SourceContainer;