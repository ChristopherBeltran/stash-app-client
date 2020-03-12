import React from "react";
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import GridItem from '../components/Grid/GridItem.jsx'
import { getStash, removeFromStash } from '../actions/stash.js'
import ArticleCard from './ArticleCard.js'
import Loading from './Loading.js'
import { openArticleModal, hideArticleModal } from '../actions/article.js'
import { Link } from 'react-router-dom'
import ScrollUpButton from "react-scroll-up-button";

class StashContainer extends React.Component {

    componentDidMount(){
        this.props.getStash(this.props.user)
    }

    handleRemove = (article, stash) => {
        this.props.removeFromStash(article, stash)
    }


    render() {
        if(this.props.stash != null && this.props.stash.attributes.articles.length >= 1){
        const stashArticles = this.props.stash.attributes.articles
        const renderCards = stashArticles.map((article, index) => {
            return(
                <GridItem key={index} xs={10} sm={4} md={3} lg={3}>
                    <ArticleCard key={index} article={article} handleRemove={this.handleRemove} stash={this.props.stash} openArticleModal={this.props.openArticleModal} articleModal={this.props.articleModal} hideArticleModal={this.props.hideArticleModal} darkMode={this.props.darkMode}></ArticleCard>
                </GridItem>
            )
        })
        return(
            <div id='stash-container'>
            <Grid container justify="space-evenly" spacing={4} >
            {renderCards}
            </Grid>
            <ScrollUpButton color="primary"/>
            </div>
        )
        } else {
            return(
                <div>
                <h1>No articles stashed yet!</h1>
                <br>
                </br>
                <h2>Return to your <Link to='/stream' style={{ textDecoration: 'none' }} >Stream</Link> to stash articles.</h2>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        stash: state.stash,
        user: state.currentUser,
        articleModal: state.articleModal,
        darkMode: state.darkMode
    }
}

export default connect(mapStateToProps, { getStash, removeFromStash, openArticleModal, hideArticleModal }) (StashContainer);