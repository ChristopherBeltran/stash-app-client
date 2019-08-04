import React from "react";
import { connect } from 'react-redux';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { addToStash } from '../actions/stash.js'


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
            this.props.addToStash(this.props.article, this.props.stash)
        } else if(this.state.color === 'primary'){
            this.setState({ color: 'disabled' });

        }
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

export default connect(mapStateToProps, { addToStash })(StashButton)


// render() {
//     <i className='large material-icons' onClick={(e) => this.handleClick(e)}>
//         { this.state.icon ? 'add' : 'remove' }
//     </i>
// }
