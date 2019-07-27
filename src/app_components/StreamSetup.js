import React from 'react';
import { connect } from 'react-redux'
import SourceContainer from './SourceContainer.js'
import { getSources } from '../actions/sources.js'
import SourceModal from './SourceModal.js'
import Loading from './Loading.js'
import { addSource } from '../actions/stream.js'
import { removeSource } from '../actions/stream.js'


class StreamSetup extends React.Component {

    componentDidMount() {
        this.props.getSources()
      }

    updateSource = (source_id) => {
        this.props.addSource(source_id)
    }

    deleteSource = (source_id) => {
        this.props.removeSource(source_id)
    }

    render(){

        if(this.props.sources != null){
        return(
            <div>
                <SourceModal></SourceModal>
                <SourceContainer sources={this.props.sources} user={this.props.user} deleteSource={this.deleteSource}updateSource={this.updateSource} history={this.props.history}></SourceContainer>
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
        sources: state.sources,
        user: state.currentUser,
        stream: state.stream
    }
}

export default connect(mapStateToProps, { getSources, addSource, removeSource })(StreamSetup);



//on mount will trigger the action to fetch /sources from API
//will save state as sources
//pass state down as props to source container
//source container