import React from "react";
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import GridItem from '../components/Grid/GridItem.jsx'
import { getStash, removeFromStash } from '../actions/stash.js'
import StashCard from './StashCard.js'
import Loading from './Loading.js'


class StashContainer extends React.Component {

    componentDidMount(){
        this.props.getStash()
    }

    handleRemove = (article, stash) => {
        this.props.removeFromStash(article, stash)
    }


    render() {
        if(this.props.stash != null){
        const stashArticles = this.props.stash.attributes.articles
        const renderCards = stashArticles.map((article, index) => {
            return(
                <GridItem key={index} md={3}>
                    <StashCard key={index} article={article} handleRemove={this.handleRemove} stash={this.props.stash}></StashCard>
                </GridItem>
            )
        })
        return(
            <div>
            <Grid container spacing={8} >
            {renderCards}
            </Grid>
            </div>
        )
        } else {
            return(
                <Loading></Loading>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        stash: state.stash
    }
}

export default connect(mapStateToProps, { getStash, removeFromStash }) (StashContainer);