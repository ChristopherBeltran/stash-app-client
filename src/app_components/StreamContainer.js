import React from "react";
import { connect } from 'react-redux'
import { getStream } from '../actions/stream.js'
import StreamCard from './StreamCard.js'
import Grid from '@material-ui/core/Grid';
import GridItem from '../components/Grid/GridItem.jsx'
import { createStash } from '../actions/stash.js'
import StreamModal from './StreamModal.js'
import Loading from './Loading.js'
import ArticleModal from './ArticleModal'
import { openArticleModal, hideArticleModal } from '../actions/article.js'


class StreamContainer extends React.Component {

    componentDidMount() {
        this.props.getStream()
    }


    render() {
        if(this.props.stream !== null){
            if(this.props.stash === null){
                this.props.createStash(this.props.user)
                }
        const stream = this.props.stream
        const renderCards = stream.map((article, index) => {
                return(
                <GridItem key={index} md={3}>
                <StreamCard key={index} stream={this.props.stream} article={article} openArticleModal={this.props.openArticleModal} articleModal={this.props.articleModal} hideArticleModal={this.props.hideArticleModal} ></StreamCard>
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
        } else {
            return(
                <div>
                    <Loading></Loading>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        stream: state.stream,
        user: state.currentUser,
        stash: state.stash,
        articleModal: state.articleModal

    }
}

export default connect(mapStateToProps, { getStream, createStash, openArticleModal, hideArticleModal }) (StreamContainer)
