import React from "react";
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import GridItem from '../components/Grid/GridItem.jsx'
import { getStash } from '../actions/stash.js'


class StashContainer extends React.Component {

    componentDidMount(){
        this.props.getStash()
    }


    render() {
        return(
            <div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stash: state.stash
    }
}

export default connect(mapStateToProps, { getStash }) (StashContainer);