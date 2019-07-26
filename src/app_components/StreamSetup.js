import React from 'react';
import { connect } from 'react-redux'
import SourceContainer from './SourceContainer.js'
import { getSources } from '../actions/sources.js'
import SourceModal from './SourceModal.js'


class StreamSetup extends React.Component {

    componentDidMount() {
        this.props.getSources()
      }

    render(){

        if(this.props.sources != null){
        return(
            <div>
                <SourceModal></SourceModal>
                <SourceContainer sources={this.props.sources} user={this.props.user}></SourceContainer>
            </div>
        )
        } else {
            return(
                <div>
                    Nada yet
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        sources: state.sources,
        user: state.currentUser
    }
}

export default connect(mapStateToProps, { getSources })(StreamSetup);



//on mount will trigger the action to fetch /sources from API
//will save state as sources
//pass state down as props to source container
//source container