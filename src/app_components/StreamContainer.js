import React from "react";
import { connect } from 'react-redux'
import { getStream } from '../actions/stream.js'
import ArticleCard from './ArticleCard.js'
import Grid from '@material-ui/core/Grid';
import GridItem from '../components/Grid/GridItem.jsx'
import { createStash } from '../actions/stash.js'
import StreamModal from './StreamModal.js'
import Loading from './Loading.js'
import { resetFirstTimeUser } from '../actions/firstTimeUser.js'
import { getStash } from '../actions/stash.js'
import ArticleModal from './ArticleModal'
import { openArticleModal, hideArticleModal } from '../actions/article.js'


class StreamContainer extends React.Component {

    componentDidMount() {
        this.props.getStream(this.props.history,this.props.user)
        this.props.getStash(this.props.user)
    }


    render() {
        if(this.props.stream !== null){
        const stream = this.props.stream
        const renderCards = stream.map((article, index) => {
                return(
                <GridItem key={index} xs={10} sm={4} md={3} lg={3}>
                <ArticleCard key={index} stream={this.props.stream} article={article} openArticleModal={this.props.openArticleModal} articleModal={this.props.articleModal} hideArticleModal={this.props.hideArticleModal} ></ArticleCard>
                </GridItem>
                )
            })
        
        return (
            <div id="stream-container">
                <Grid container justify="space-evenly" spacing={4}>
                    {renderCards}
                </Grid>
                {this.props.firstTimeUser ? <StreamModal resetFirstTimeUser={this.props.resetFirstTimeUser}></StreamModal> : null}
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
        //user: state.currentUser,
        stash: state.stash,
        firstTimeUser: state.firstTimeUser,
        articleModal: state.articleModal
    }
}

export default connect(mapStateToProps, { getStream, createStash, resetFirstTimeUser, getStash, openArticleModal, hideArticleModal }) (StreamContainer)
