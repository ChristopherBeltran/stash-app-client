import React from "react";
import { connect } from 'react-redux'
import { getStream } from '../actions/stream.js'
import StreamCard from './StreamCard.js'
import Grid from '@material-ui/core/Grid';
import GridItem from '../components/Grid/GridItem.jsx'
import { createStash } from '../actions/stash.js'
import StreamModal from './StreamModal.js'


class StreamContainer extends React.Component {

    componentDidMount() {
        this.props.createStash(this.props.user)
    }




    render() {
        const stream = this.props.stream
        console.log(stream)
        const renderCards = stream.map((article, index) => {
                return(
                    <GridItem key={index} md={3}>
                <StreamCard key={index} article={article}></StreamCard>
                </GridItem>
                )
            })
        return (
            <div>
            <StreamModal></StreamModal>
            <Grid container spacing={8} >
            {renderCards}
            </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stream: state.stream,
        user: state.currentUser
    }
}

export default connect(mapStateToProps, { getStream, createStash }) (StreamContainer)
