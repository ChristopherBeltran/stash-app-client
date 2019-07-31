import React from "react";
import { connect } from 'react-redux'
import { getStream } from '../actions/stream.js'
import StreamCard from './StreamCard.js'


class StreamContainer extends React.Component {

    componentDidMount() {
        this.props.getStream()
    }

    renderCards = () => {
        this.props.stream.map((source, index) => {
            return(
            <StreamCard id={index} source={source}></StreamCard>
            )
        }
        )}


    render() {
        return (
            <div>
            Placeholder stream
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stream: state.stream
    }
}

export default connect(mapStateToProps, { getStream }) (StreamContainer)
