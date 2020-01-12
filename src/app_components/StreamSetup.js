import React from 'react';
import { connect } from 'react-redux'
import SourceContainer from './SourceContainer.js'
import { getSources } from '../actions/sources.js'
import SourceModal from './SourceModal.js'
import Loading from './Loading.js'
import { addSource, removeSource, updateStream } from '../actions/stream.js'
import NavBar from './Navbar.js'
import NavSubmit from './NavSubmit.js'


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

    streamUpdate = () => {
        let stream = this.props.stream
        this.props.updateStream(stream, this.props.history, this.props.user)
    }

    mobileHandler = () => {
        if(this.props.isDesktop !== true){
            return (
                <NavSubmit stream={this.props.stream} streamUpdate={this.streamUpdate}></NavSubmit>
            )
        }
    }

    render(){

        if(this.props.sources != null){
        return(
            <div>
                <NavBar stream={this.props.stream} streamUpdate={this.streamUpdate} loggedIn={this.props.loggedIn} isDesktop={this.props.isDesktop}></NavBar>
                <SourceModal></SourceModal>
                <SourceContainer mobileHandler={this.mobileHandler} sources={this.props.sources} user={this.props.user} deleteSource={this.deleteSource}updateSource={this.updateSource} history={this.props.history} streamUpdate={this.streamUpdate}></SourceContainer>
            </div>
        )
        } else {
            return(
                <div>
                    <NavBar streamUpdate={this.streamUpdate}></NavBar>
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
        stream: state.stream,
        loggedIn: !!state.currentUser,
        isDesktop: state.isDesktop
    }
}

export default connect(mapStateToProps, { getSources, addSource, removeSource, updateStream })(StreamSetup);



//on mount will trigger the action to fetch /sources from API
//will save state as sources
//pass state down as props to source container
//source container