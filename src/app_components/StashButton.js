import React from "react";
import { connect } from 'react-redux';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { addToStash, removeFromStash } from '../actions/stash.js'


class StashButton extends React.Component {
    constructor() {
        super();
        this.state = {
            color: 'disabled'
        }
    }

    handleCLick = () => {
        if(this.state.color === 'disabled'){
            this.setState({ color: 'primary' });
            this.props.addToStash(this.props.article, this.props.stash, this.props.user)
        } else if(this.state.color === 'primary'){
            this.setState({ color: 'disabled' });
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
               color={this.state.color}
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
