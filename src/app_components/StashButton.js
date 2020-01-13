import React from "react";
import { connect } from 'react-redux';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { addToStash, removeFromStash } from '../actions/stash.js'


class StashButton extends React.Component {
    constructor() {
        super();
        this.state = {
            htmlColor: '#bcbcc2'
        }
    }

    componentDidMount(){
        this.streamCheck();
    }

    streamCheck = () => {
        if(this.props.stash.attributes.articles !== null && this.props.stash.attributes.articles.length > 1){
            for(const article of this.props.stash.attributes.articles){
                if(article.url === this.props.article.url){
                    this.setState({ htmlColor: '#9c27b0' })
                }
            }
        }
    }

    handleCLick = () => {
        if(this.state.htmlColor === '#bcbcc2'){
            this.setState({ htmlColor: '#9c27b0' });
            this.props.addToStash(this.props.article, this.props.stash, this.props.user)
        } else if(this.state.htmlColor === '#9c27b0'){
            this.setState({ htmlColor: '#bcbcc2' });
            let articleToRemove = this.articleSync()
            this.props.removeFromStash(articleToRemove, this.props.stash)
        }
    }

    articleSync = () => {
        const streamArticle = this.props.article;
        const stashArticles = this.props.stash.attributes.articles;

        for(const article of stashArticles){
            if(article.url === streamArticle.url){
                var stashArticle = article
            }
        }
        return stashArticle
    }
        
    render() {
        return (
            <div>
               <BookmarkIcon
               htmlColor={this.state.htmlColor}
               onClick={this.handleCLick}
               ></BookmarkIcon>     
            </div>
        )
    }



}

const mapStateToProps = (state) => {
    return {
        stash: state.stash,
        user: state.currentUser
    }
}

export default connect(mapStateToProps, { addToStash, removeFromStash })(StashButton)


// render() {
//     <i className='large material-icons' onClick={(e) => this.handleClick(e)}>
//         { this.state.icon ? 'add' : 'remove' }
//     </i>
// }
