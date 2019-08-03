import React from "react";
import { connect } from 'react-redux';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { createArticle } from '../actions/article.js'


class StashButton extends React.Component {
    constructor() {
        super();
        this.state = {
            stashed: false
        }
    }

    render() {
        return (
            <div>
               <BookmarkIcon></BookmarkIcon>     
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

export default connect(mapStateToProps, { createArticle })(StashButton)


// render() {
//     <i className='large material-icons' onClick={(e) => this.handleClick(e)}>
//         { this.state.icon ? 'add' : 'remove' }
//     </i>
// }
